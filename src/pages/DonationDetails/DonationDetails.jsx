
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import DonateModal from '../../components/DonateModal';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const DonationDetails = () => {
    const {id} = useParams()
    const axiosSecure = useAxiosSecure()
    const donationDetails = useLoaderData()
    // const { data: donationPetDetails = {} } = useQuery({
    //     queryKey: ['donationPetDetails', id],
    //     queryFn: async () => {
    //         const { data } = await axiosSecure.get(`http://localhost:3000/petDetails/${id}`);
    //         return data;
    //     }
    // });
    const { name, image, max_donation_amount, donated_amount, lastDateOfDonation, longDescription, shortDescription } = donationDetails || {}
    // console.log(donationPetDetails)
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-red-200 p-6'>
                <div>
                    <img src={image} className='rounded-md' alt="" />
                </div>
                <div>
                    <h3 className='text-2xl'>Name: {name}</h3>
                    <p>Max Donation Amount: $ {max_donation_amount}</p>
                    <p>Total Donated Amount: $ {donated_amount ? donated_amount : 0}</p>
                    <p>last Date Of Donation: $ {lastDateOfDonation}</p> 
                    <p>{longDescription}</p> 
                    <p>{shortDescription}</p> 
                    <p>Description</p>
                    <DonateModal donationDetails={donationDetails}></DonateModal>
                </div>

            </div>

        </Container>
    );
};

export default DonationDetails;