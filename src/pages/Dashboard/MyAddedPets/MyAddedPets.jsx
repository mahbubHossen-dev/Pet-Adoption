import React from 'react';
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


const MyAddedPets = () => {
    const { user } = useAuth()
    const { data: myPets = [] } = useQuery({
        queryKey: ['pets', user?.email],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/myPets/${user?.email}`)
            return data
        }
    })

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
                    const { data } = await axios.delete(`http://localhost:3000/removeMyPet/${id}`)
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
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

    const getAdopted = async (id) => {
        const statusUpdateData = {
            adopted: true,
            email: user.email
        }
        try {
            const { data } = await axios.patch(`http://localhost:3000/myAddedPet/${id}`, statusUpdateData)
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
                        myPets.map((pet, idx) => <TableRow key={pet._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell className="font-medium"><img src={pet.img} alt="" /></TableCell>
                            <TableCell className="font-medium">{pet.name}</TableCell>
                            <TableCell className="font-medium">{pet.category}</TableCell>
                            <TableCell className="font-medium">{pet.adopted ? 'Adopted' : 'Not Adopted'}</TableCell>
                            <TableCell className="font-medium"><Link to={`/dashboard/update/${pet._id}`}><button>Update</button></Link></TableCell>
                            <TableCell className="font-medium"><button onClick={() => handleMyPetsDelete(pet._id)}>DELETE</button></TableCell>
                            <TableCell className="font-medium"><button onClick={() => getAdopted(pet._id)}>Adopted</button></TableCell>
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