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
import LoadingSpinner from '../../../components/LoadingSpinner';
import { MdDelete } from 'react-icons/md';


const AllDonations = () => {
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const { data: allDonations = [], refetch, isLoading } = useQuery({
        queryKey: ['allDonationsPetData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/allDonations')
            return data
        }
    })

    // handlePause

    const handlePause = async (id) => {
        const adoptedStatus = {
            pause: true,
        }
        try {
            const { data } = await axiosSecure.patch(`/pauseDonation/${id}`, adoptedStatus)
            refetch()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    const handleUnPause = async (id) => {
        const adoptedStatus = {
            pause: false,
        }
        try {
            const { data } = await axiosSecure.patch(`/unpauseDonation/${id}`, adoptedStatus)
            refetch()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }


    const handleCampaignsDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/deleteCampaigns/${id}`, { withCredentials: true })
                    if (data.deletedCount > 0) {
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

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h3 className='text-2xl font-medium text-center mb-4'>All Donations</h3>
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

                            <TableCell className="font-medium"><button  className='text-orange-600 py-2 px-3 ' onClick={() => handleCampaignsDelete(donation._id)}><MdDelete className='text-2xl hover:text-red-700' /></button></TableCell>

                            <TableCell className="font-medium"><Link state={location.pathname} to={`/dashboard/editDonation/${donation._id}`}><button className='text-orange-500 py-2 px-3'><CiEdit className='text-xl'/></button></Link></TableCell>

                            {
                                donation.pause === true ? <TableCell className="font-medium"><button onClick={() => handleUnPause(donation._id)} className='border border-orange-600 rounded-xl text-orange-600 py-2 px-3'>Unpause</button></TableCell>
                                    :
                                    <TableCell className="font-medium"><button className='border border-orange-600 rounded-xl text-orange-600 py-2 px-3 ' onClick={() => handlePause(donation._id)}>Pause</button></TableCell>
                            }



                        </TableRow>)
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default AllDonations;