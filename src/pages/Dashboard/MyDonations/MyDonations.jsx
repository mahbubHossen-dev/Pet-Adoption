import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

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
            MyDonations
        </div>
    );
};

export default MyDonations;