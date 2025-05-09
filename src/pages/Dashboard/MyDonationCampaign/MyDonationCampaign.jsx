import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { FaPause } from "react-icons/fa6";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Link, useLocation } from 'react-router-dom';
import UserShowModal from '../../../components/UserShowModal';
import LoadingSpinner from '../../../components/LoadingSpinner';

const MyDonationCampaign = () => {
    const location = useLocation()
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [userDonationData, setUserDonationData] = useState([])
    const [modalLoading, setModalLoading] = useState(true)
    const { data: myDonationPet = [], refetch, isLoading } = useQuery({
        queryKey: ['myDonations', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/myDonationPets/${user?.email}`)
            return data
        }
    })


    // const { data: myPets = [], isLoading, refetch } = useQuery({
    //     queryKey: ['myPets', user?.email],
    //     queryFn: async () => {
    //         const { data } = await axiosSecure.get(`/myPets/${user?.email}`)
    //         return data
    //     }
    // })

    console.log(myDonationPet)
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    // pause donation
    const handlePause = async (id) => {
        console.log('pause click')
        try {
            const { data } = await axiosSecure.patch(`/pauseDonation/${id}`, { pause: true })
            if (data.modifiedCount > 0) {
                refetch()
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleUnPause = async (id) => {
        try {
            const { data } = await axiosSecure.patch(`/unPausedDonation/${id}`, { pause: false })
            console.log(data)
            if (data.modifiedCount > 0) {
                refetch()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleShowUser = async (id, openModal) => {
        console.log(id)
        openModal()

        setModalLoading(true)
        try {
            const { data } = await axiosSecure.get(`/donarDetails/${id}`)
            if(data){
                setUserDonationData(data)
                setModalLoading(false)
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>

            <h3 className={`text-2xl font-medium mb-4 ${myDonationPet.length > 0 ?'text-center': 'justify-center items-center text-center pt-24'}`}>{myDonationPet.length > 0 ? 'My Donation Campaigns' : 'You are Not created any campaign'}</h3>
            {
                myDonationPet.length > 0 && <Table>
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

                                {
                                    donation.pause === true ? <TableCell className="font-medium"><button onClick={() => handleUnPause(donation._id)} className='bg-gray-600 py-2 px-3 text-white'>Unpause</button></TableCell>
                                        :
                                        <TableCell className="font-medium"><button className='bg-gray-600 py-2 px-3 text-white' onClick={() => handlePause(donation._id)}>Pause</button></TableCell>
                                }

                                <TableCell className="font-medium"><Link state={location.pathname} to={`/dashboard/editDonation/${donation._id}`}><button><CiEdit /></button></Link></TableCell>

                                <TableCell className="font-medium"><UserShowModal handleShowUser={handleShowUser} id={donation._id} userDonationData={userDonationData} modalLoading={modalLoading} ></UserShowModal></TableCell>

                            </TableRow>)
                        }
                        {/* <FaEye /> */}
                    </TableBody>
                </Table>
            }
        </div>
    );
};

export default MyDonationCampaign;