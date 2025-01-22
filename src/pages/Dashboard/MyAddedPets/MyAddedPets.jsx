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


const MyAddedPets = () => {
    const { user } = useAuth()
    const { data: myPets = [] } = useQuery({
        queryKey: ['pets', user?.email],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/myPets/${user?.email}`)
            return data
        }
    })
    console.log(myPets)

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
                            <TableCell className="font-medium">{idx+1}</TableCell>
                            <TableCell className="font-medium"><img src={pet.img} alt="" /></TableCell>
                            <TableCell className="font-medium">{pet.name}</TableCell>
                            <TableCell className="font-medium">{pet.category}</TableCell>
                            <TableCell className="font-medium">status</TableCell>
                            <TableCell className="font-medium"><button>Update</button></TableCell>
                            <TableCell className="font-medium"><button>DELETE</button></TableCell>
                            <TableCell className="font-medium"><button>Adopted</button></TableCell>
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