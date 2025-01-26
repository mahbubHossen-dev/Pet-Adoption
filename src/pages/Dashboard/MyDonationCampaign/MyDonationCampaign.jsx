import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { CiEdit } from "react-icons/ci";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { FaPause } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link } from 'react-router-dom';

const MyDonationCampaign = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: myDonationPet = []} = useQuery({
        queryKey: ['myDonations', user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/myDonationPets/${user?.email}`)
            return data
        }
    })  
    console.log(myDonationPet)


    // pause donation
    const handlePauseDonation =async (id) => {
        console.log('pause click')
        try {
            const {data} = await axiosSecure.patch(`/pauseDonation/${id}`, {pause: true})
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>s/n</TableHead>
                        <TableHead>Pet Name</TableHead>
                        <TableHead>Maximum Donation Amount</TableHead>
                        <TableHead>Progress Bar</TableHead>
                        <TableHead>Pause</TableHead>
                        <TableHead>Edit</TableHead>
                        <TableHead>View Donators</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        myDonationPet?.map((donation, idx) => <TableRow key={donation._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell className="font-medium">{donation.name}</TableCell>
                            <TableCell className="font-medium">{donation.max_donation_amount}</TableCell>
                            <TableCell className="font-medium">Progress Bar</TableCell>

                            {/* {
                                pet.adoptedStatus === 'requested' && pet.adopted === false? <TableCell className="font-medium">requested</TableCell> : pet.adoptedStatus === 'requested' && pet.adopted === true? <TableCell className="font-medium">Adopted</TableCell>
                            } */}


                            

                            {
                                donation.pause ? <TableCell className="font-medium"><button onClick={() => handlePauseDonation (donation._id)}><FaPause />Start</button></TableCell>
                                 :
                                <TableCell className="font-medium"><button onClick={() => handlePauseDonation (donation._id)}>Pause</button></TableCell>
                            }
                            
                            <TableCell className="font-medium"><Link to={`/dashboard/editDonation/${donation._id}`}><button><CiEdit /></button></Link></TableCell>
                            <TableCell className="font-medium"><button><FaEye /></button></TableCell>
                        </TableRow>)
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default MyDonationCampaign;