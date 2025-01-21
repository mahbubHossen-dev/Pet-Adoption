import React from 'react';
import Container from '../../components/Container';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DonationCard from '../../components/DonationCard';

const DonationCampaigns = () => {

    const {data: donationData= []} = useQuery({
        queryKey: ['donationCampaigns'],
        queryFn: async () => {
            const {data} = await axios.get('http://localhost:3000/donations')
            return data
        }
    })
    // console.log(donationData)
    return (
        <div>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        donationData.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default DonationCampaigns;