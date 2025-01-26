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
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa6';
import { CiEdit } from 'react-icons/ci';
import SeeRequestModal from '../../../components/SeeRequestModal';

const AdoptionRequest = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: requestData = []} = useQuery({
        queryKey: ['adoptionRequest', user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/myAdoptionRequest/${user?.email}`)
            return data;
        }
    })
    console.log(requestData)


    const handleAdoptModal = (e, closeModal) => {
        e.preventDefault()
        console.log('clco')
        console.log(e)
    }

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>s/n</TableHead>
                        <TableHead>Pet Image</TableHead>
                        <TableHead>Pet Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Adoption Request</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        requestData?.map((request, idx) => <TableRow key={request._id}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell className="font-medium">
                                <img src={request.image} className='w-10 h-10' alt="" />
                            </TableCell>
                            <TableCell className="font-medium">{request.name}</TableCell>
                            <TableCell className="font-medium">{request.category}</TableCell>

                            {/* {
                                pet.adoptedStatus === 'requested' && pet.adopted === false? <TableCell className="font-medium">requested</TableCell> : pet.adoptedStatus === 'requested' && pet.adopted === true? <TableCell className="font-medium">Adopted</TableCell>
                            } */}

                            <SeeRequestModal data={request} handleAdoptModal={handleAdoptModal}></SeeRequestModal>
                        </TableRow>)
                    }

                </TableBody>
            </Table>
        </div>
    );
};

export default AdoptionRequest;