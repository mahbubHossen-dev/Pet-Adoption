import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
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


const MyDonations = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: myDonationsInPet=[]} = useQuery({
        queryKey: ['myDonationsInPet', user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/myDonationsInPet/${user?.email}`)
            return data;
        }
    })
    console.log(myDonationsInPet)
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>s/n</TableHead>
                        <TableHead>Pet Image</TableHead>
                        <TableHead>Pet Name</TableHead>
                        <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        myDonationsInPet?.map((donation, idx) => <TableRow key={donation._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell className="font-medium">
                                <img src={donation.image} className='w-10 h-10' alt="" />
                            </TableCell>
                            <TableCell className="font-medium">{donation.name}</TableCell>
                            <TableCell className="font-medium">${donation.donarInfo.amount}</TableCell>

                            {/* {
                                pet.adoptedStatus === 'requested' && pet.adopted === false? <TableCell className="font-medium">requested</TableCell> : pet.adoptedStatus === 'requested' && pet.adopted === true? <TableCell className="font-medium">Adopted</TableCell>
                            } */}

                            {/* <SeeRequestModal data={request} handleAdoptModal={handleAdoptModal}></SeeRequestModal> */}
                        </TableRow>)
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default MyDonations;