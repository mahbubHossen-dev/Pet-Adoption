import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Swal from 'sweetalert2';
import { Link, useLocation } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';


const AllDonations = () => {
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const {data: allDonations=[], refetch} = useQuery({
        queryKey: ['allDonationsPetData'],
        queryFn: async () => {
            const {data} =await axiosSecure.get('/allDonations')
            return data
        }
    })
    

    const handleCampaignsDelete = (id) => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async(result) => {
                if (result.isConfirmed) {
                    try {
                        const { data } = await axiosSecure.delete(`/deleteCampaigns/${id}`, {withCredentials: true})
                        if(data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }
            });
        }

    return (
         <div>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>s/n</TableHead>
                                <TableHead>Pet Image</TableHead>
                                <TableHead>Pet Name</TableHead>
                                <TableHead>Max Donation</TableHead>
                                <TableHead>Delete</TableHead>
                                <TableHead>Edit</TableHead>
                                <TableHead>Pause</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                allDonations?.map((donation, idx) => <TableRow key={donation._id}>
                                    <TableCell className="font-medium">{idx + 1}</TableCell>

                                    <TableCell className="font-medium">
                                        <img src={donation.image} className='w-10 h-10' alt="" />
                                    </TableCell>

                                    <TableCell className="font-medium">{donation.name}</TableCell>

                                    <TableCell className="font-medium">${donation.max_donation_amount}</TableCell>

                                    <TableCell className="font-medium"><button onClick={() => handleCampaignsDelete(donation._id)}>Delete</button></TableCell>

                                    <TableCell className="font-medium"><Link state={location.pathname} to={`/dashboard/editDonation/${donation._id}`}><button><CiEdit /></button></Link></TableCell>

                                    <TableCell className="font-medium"><button>Pause</button></TableCell>
        
                                    
                                </TableRow>)
                            }
        
                        </TableBody>
                    </Table>
                </div>
    );
};

export default AllDonations;