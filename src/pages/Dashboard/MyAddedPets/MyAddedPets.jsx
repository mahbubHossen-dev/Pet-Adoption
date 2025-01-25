import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
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
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const MyAddedPets = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [status, setStatus] = useState("")
    const {data: myPets = [], isLoading, refetch} = useQuery({
        queryKey: ['myPets', user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/myPets/${user?.email}`)
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
        }).then(async(result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/removeMyPet/${id}`, {withCredentials: true})
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

    // update pet
    const handleMyPetUpdate = (id) => {
        console.log(id)
    } 

    const handleAdopted = async (id, adoStatus, adopted) => {
        const adoptedStatus = {
            adopted: true,
            adoptionStatus: 'Adopted'
        }
        try {
            const { data } = await axiosSecure.patch(`/petAdopted/${id}`, adoptedStatus)
            // if (adopted === true && adoptedStatus === 'requested') {
            //     setStatus('Adopted');
            //   } else if (adopted === false && adoptedStatus === 'requested') {
            //     setStatus('Requested');
            //   } else {
            //     setStatus('Not Requested');
            //   }
            refetch()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        
    }, [])

    if(isLoading){
        return <p>Loading...</p>
    }
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>s/n</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Adoption Status</TableHead>
                        <TableHead>Update</TableHead>
                        <TableHead>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        myPets?.map((pet, idx) => <TableRow key={pet._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell className="font-medium"><img src={pet.img} alt="" /></TableCell>
                            <TableCell className="font-medium">{pet.name}</TableCell>
                            <TableCell className="font-medium">{pet.category}</TableCell>

                            {/* {
                                pet.adoptedStatus === 'requested' && pet.adopted === false? <TableCell className="font-medium">requested</TableCell> : pet.adoptedStatus === 'requested' && pet.adopted === true? <TableCell className="font-medium">Adopted</TableCell>
                            } */}


                            {
                                <TableCell className="font-medium">{pet.adoptionStatus ? pet.adoptionStatus : 'Not Requested'}</TableCell>
                            }

                            {/* <TableCell className="font-medium">{pet.adopted === true ? 'Adopted' : 'Not Adopted'}</TableCell> */}
                            <TableCell className="font-medium"><Link to={`/dashboard/update/${pet._id}`}><button>Update</button></Link></TableCell>
                            <TableCell className="font-medium"><button onClick={() => handleMyPetsDelete(pet._id)}>DELETE</button></TableCell>
                            <TableCell className="font-medium"><button onClick={() => handleAdopted(pet._id, pet.adoptedStatus, pet.adopted)}>Adopted</button></TableCell>
                        </TableRow>)
                    }

                </TableBody>
            </Table>
            {/* 
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell> */}
        </div>
    );
};

export default MyAddedPets;