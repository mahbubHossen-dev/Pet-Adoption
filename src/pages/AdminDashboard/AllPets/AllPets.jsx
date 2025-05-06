import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { CiEdit } from "react-icons/ci";
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
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../components/LoadingSpinner';

const AllPets = () => {

    const axiosSecure = useAxiosSecure()

    const { data: allPets = [], refetch, isLoading } = useQuery({
        queryKey: ['allPets'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('https://pet-adoption-server-psi.vercel.app/allPets')
            return data
        }
    })

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


    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h3 className='text-2xl font-medium text-center mb-4'>All Pets</h3>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>s/n</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Name</TableHead>
                        
                        <TableHead>Update</TableHead>
                        <TableHead>Delete</TableHead>
                        <TableHead>Adoption Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allPets?.map((pet, idx) => <TableRow key={pet._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell className="font-medium"><img src={pet.image} className='h-[50px] w-[60px]' alt="" /></TableCell>
                            <TableCell className="font-medium">{pet.name}</TableCell>
                            <TableCell className="font-medium">{pet.category}</TableCell>

                            
                            <TableCell className="font-medium">
                                <Link to={`/dashboard/update/${pet._id}`}>
                                    <button className='text-orange-500 py-2 px-3'>
                                        <CiEdit className='text-2xl' />
                                    </button>
                                </Link>
                            </TableCell>

                            <TableCell className="font-medium">
                                <button className='text-orange-600 py-2 px-3'
                                    onClick={() => handleMyPetsDelete(pet._id)}>
                                    <MdDelete className='text-2xl' />
                                </button>
                            </TableCell>

                            {
                                pet?.adoptionStatus == 'Adopted' ? <TableCell className="font-medium">
                                    <button className='text-green-600 py-2 px-3 text-center'>Adopted</button>
                                </TableCell>
                                    : <TableCell className="font-medium">
                                        <button className='border border-orange-600 rounded-xl py-2 px-3'
                                            onClick={() => handleAdopted(pet._id, pet.adoptedStatus, pet.adopted)}>Adopt Now</button>
                                    </TableCell>
                            }

                        </TableRow>)
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default AllPets;