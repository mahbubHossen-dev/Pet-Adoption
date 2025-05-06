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
import LoadingSpinner from '../../../components/LoadingSpinner';

const AdoptionRequest = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: requestData = [], isLoading } = useQuery({
        queryKey: ['adoptionRequest', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/myAdoptionRequest/${user?.email}`)
            return data;
        },
    })

    console.log(requestData)

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div className='pt-12'>
            <h3 className={`text-2xl font-medium text-center mb-6 ${requestData.length > 0 ? 'text-center' : 'text-center pt-12'}`}>{requestData.length > 0 ? 'Adoptions Request' : 'Request Not Available'}</h3>
            {requestData.length > 0 &&
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

                                <div className='flex justify-center items-center text-center'>
                                    <SeeRequestModal data={request}></SeeRequestModal>
                                </div>
                            </TableRow>)

                        }
                    </TableBody>

                </Table>
            }
        </div>
    );
};

export default AdoptionRequest;