import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Users = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('http://localhost:3000/users')
            return data
        }
    })

    // const handleMakeAdmin = (id) => {
    //     console.log(id)
    // }
    const handleMakeAdmin = async (email) => {
        const adoptedStatus = {
            role: 'Admin',
        }
        try {
            const { data } = await axiosSecure.patch(`/makeAdmin/${email}`, adoptedStatus)

            refetch()
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    console.log(users)
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>s/n</TableHead>
                        <TableHead>User Image</TableHead>
                        <TableHead>User Name</TableHead>
                        <TableHead>User Email</TableHead>
                        <TableHead>Make Admin</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        users?.map((user, idx) => <TableRow key={user._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell className="font-medium">
                                <img src={user.image} className='w-10 h-10' alt="" />
                            </TableCell>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell className="font-medium">{user.email}</TableCell>

                            {
                                user?.role == 'Admin' ? <TableCell className="font-medium">
                                    <button className='text-green-600 py-2 px-3 text-lg'>Admin</button>
                                </TableCell> 
                                : <TableCell className="font-medium">
                                    <button onClick={() => handleMakeAdmin(user.email)} className='bg-gray-400 py-2 px-3'>Make Admin</button>
                                </TableCell>
                            }




                            {/* <SeeRequestModal data={request} handleAdoptModal={handleAdoptModal}></SeeRequestModal> */}
                        </TableRow>)
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default Users;