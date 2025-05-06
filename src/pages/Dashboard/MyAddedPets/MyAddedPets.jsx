

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
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
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { CiEdit } from 'react-icons/ci';


const MyAddedPets = () => {
    const { user } = useAuth()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [isSorted, setIsSorted] = useState(false);
    const [status, setStatus] = useState("")
    const { data: myPets = [], isLoading, refetch } = useQuery({
        queryKey: ['myPets', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/myPets/${user?.email}`)
            return data
        }
    })

    console.log(myPets)
    // delete pet
    const handleMyPetsDelete = (id) => {
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
                    const { data } = await axiosSecure.delete(`/removeMyPet/${id}`, { withCredentials: true })
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



    const handleAdopted = async (id) => {
        const adoptedStatus = {
            adopted: true,
            adoptionStatus: 'Adopted'
        }
        try {
            const { data } = await axiosSecure.patch(`/petAdopted/${id}`, adoptedStatus)

            refetch()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }


    const handleSort = () => {
        myPets.sort((a, b) => a.name.localeCompare(b.name));
        setIsSorted(!isSorted);  // State Change to Trigger Re-render
    };
    // console.log(pets)

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='pt-12'>
            <h3 className='text-2xl font-medium text-center mb-6'>My Added Pets</h3>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>s/n</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Adoption Status</TableHead>
                        <TableHead>Update</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        myPets?.map((pet, idx) => <TableRow key={pet._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell className="font-medium"><img src={pet.image} className='h-[60px] w-[80px]' alt="" /></TableCell>
                            <TableCell onClick={handleSort} className="font-medium cursor-pointer">{pet.name}</TableCell>
                            <TableCell className="font-medium">{pet.category}</TableCell>

                            {
                                <TableCell className="font-medium">{pet.adopted ? 'Adopted' : 'Not Adopted'}</TableCell>
                            }

                            <TableCell className="font-medium"><Link to={`/dashboard/update/${pet._id}`} state={location.pathname} >
                                <button className='text-orange-500 py-2 px-3'>
                                    <CiEdit className='text-2xl ' />
                                </button></Link></TableCell>

                            <TableCell className="font-medium "><button className='text-orange-600 py-2 px-3 ' onClick={() => handleMyPetsDelete(pet._id)}><MdDelete className='text-2xl hover:text-red-700' /></button></TableCell>

                            {
                                pet?.adoptionStatus == 'Adopted' ? <TableCell className="font-medium">
                                    <button className='text-green-600 py-2 px-3 text-center'>Adopted</button>
                                </TableCell>
                                    : <TableCell className="font-medium">
                                        <button className='border border-orange-600 rounded-xl py-2 px-3'
                                            onClick={() => handleAdopted(pet._id, pet.adoptedStatus, pet.adopted)}>Adopt Now</button>
                                    </TableCell>
                            }

                            {/* <TableCell className="font-medium "><button className='btn py-2 px-3 bg-gray-500 text-white' onClick={() => handleAdopted(pet._id, pet.adoptedStatus, pet.adopted)}>Adopt</button></TableCell> */}
                        </TableRow>)
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default MyAddedPets;