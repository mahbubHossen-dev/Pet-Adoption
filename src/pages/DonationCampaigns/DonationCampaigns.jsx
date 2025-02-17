
import Container from '../../components/Container';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DonationCard from '../../components/DonationCard';
import LoadingSpinner from '../../components/LoadingSpinner';

const DonationCampaigns = () => {

    const { data: donationData = [], isLoading } = useQuery({
        queryKey: ['donationCampaigns'],
        queryFn: async () => {
            const { data } = await axios.get('https://pet-adoption-server-psi.vercel.app/donations')
            return data
        }
    })
    // console.log(donationData)
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='pt-28'>
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