
import Container from '../../components/Container';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DonationCard from '../../components/DonationCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useState } from 'react';

const DonationCampaigns = () => {
    const [sortByPrice,setSortByPrice] = useState('')
    const { data: donationData = [], isLoading } = useQuery({
        queryKey: ['donationCampaigns', sortByPrice],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/donations?sortPrice=${sortByPrice}`)
            return data
        }
    })
    console.log(sortByPrice)
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='pt-28'>
            <Container>

                <div>
                    <div className="flex justify-between items-center mb-6 ">
                        <select
                            onChange={(e) => setSortByPrice(e.target.value)}
                            defaultValue="Category"
                            name="status"
                            className="border py-2 px-2 rounded w-60 border-[#FCB98B] outline-[#FCB98B]"
                        >
                            <option value="Category" disabled>
                                Sort By Price
                            </option>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                        </select>

                        {/* search */}
                        {/* <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search by name"
                            className="border-2 p-2 rounded-full border-[#FCB98B] outline-[#FCB98B]"
                        /> */}
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>


                    {
                        donationData.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default DonationCampaigns;