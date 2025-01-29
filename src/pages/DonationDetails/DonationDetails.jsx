
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Container from '../../components/Container';
import DonateModal from '../../components/DonateModal';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import DonationCard from '../../components/DonationCard';
import { useQuery } from '@tanstack/react-query';

const DonationDetails = () => {
    const params = useParams()
    const axiosSecure = useAxiosSecure()
    const [petInDetails, setPetInDetails] = useState([])
    const donationDetails = useLoaderData()

    console.log(petInDetails)
    const { name, image, max_donation_amount, donated_amount, lastDateOfDonation, longDescription, shortDescription, _id } = donationDetails || {}

    const { data: campaignsAmount } = useQuery({
        queryKey: ['donatedAmount', _id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/allDonations/${_id}`)
            // return data
            const total = data.reduce((acc, campaign) => acc + campaign.donarInfo.amount, 0);
            return total

        }
    })

    // useEffect(() => {
    //     handleAmount()
    // }, [campaignsAmount])

    // const handleAmount = () => {

    // }

    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-red-200 p-6'>
                <div>
                    <img src={image} className='rounded-md' alt="" />
                </div>
                <div>
                    <h3 className='text-2xl'>Name: {name}</h3>
                    <p>Max Donation Amount: $ {max_donation_amount}</p>
                    <p>Total Donated Amount: $ {campaignsAmount ? campaignsAmount : 0}</p>
                    {lastDateOfDonation && <p>last Date Of Donation: {lastDateOfDonation.split("T")[0]}</p>}

                    <p>{longDescription}</p>
                    <p>{shortDescription}</p>
                    <p>Description</p>
                    <DonateModal donationDetails={donationDetails} setPetInDetails={setPetInDetails}></DonateModal>
                </div>

            </div>
            2025-01-23T00:00:00.000Z

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    petInDetails && petInDetails.map(pet => <DonationCard key={pet._id} donation={pet}></DonationCard>)
                }
            </div>

        </Container>
    );
};

export default DonationDetails;