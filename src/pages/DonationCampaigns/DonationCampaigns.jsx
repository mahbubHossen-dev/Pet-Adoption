import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DonationCard from '../../components/DonationCard';
import { useInView } from 'react-intersection-observer';
import LoadingSpinner from '../../components/LoadingSpinner';

const DonationCampaigns = () => {
    const [page, setPage] = useState(1); // পেজ ট্র্যাক করা
    const [donations, setDonations] = useState([]); // ডোনেশন স্টেট
    const [hasNextPage, setHasNextPage] = useState(true); // পরবর্তী পেজ থাকলে

    const { ref, inView } = useInView(); // ইনফিনিটি স্ক্রোলিং দেখানোর জন্য

    const fetchDonations = async ({ queryKey }) => {
        const [_, page] = queryKey; // পেজ নাম্বার
        const response = await axios.get('http://localhost:3000/donations', {
            params: {
                page,
                limit: 6, // প্রতি পেজে ৬টি ডেটা
            },
        });
        return response.data;
    };

    const { data, isLoading, isFetching } = useQuery(
        ['donations', page], // queryKey
        fetchDonations,
        {
            keepPreviousData: true, // আগের ডেটা রাখবে
            onSuccess: (data) => {
                setDonations((prev) => [...prev, ...data.results]); // নতুন ডেটা যোগ
                setHasNextPage(!!data.nextPage); // পরবর্তী পেজ থাকলে
            },
        }
    );

    useEffect(() => {
        if (inView && hasNextPage) {
            setPage((prev) => prev + 1); // ইনফিনিটি স্ক্রোলিং হলে পরবর্তী পেজ লোড করবে
        }
    }, [inView, hasNextPage]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <Container>
                <div className="mb-6">
                    <h1 className="text-center text-2xl">Donation Campaigns</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {donations.map((donation) => (
                        <DonationCard key={donation._id} donation={donation} />
                    ))}
                </div>
                <div ref={ref} className="text-center mt-4">
                    {isFetching && !isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        hasNextPage && <p>Loading more...</p>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default DonationCampaigns;




// import React from 'react';
// import Container from '../../components/Container';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import DonationCard from '../../components/DonationCard';
// import LoadingSpinner from '../../components/LoadingSpinner';

// const DonationCampaigns = () => {

//     const { data: donationData = [], isLoading } = useQuery({
//         queryKey: ['donationCampaigns'],
//         queryFn: async () => {
//             const { data } = await axios.get('http://localhost:3000/donations')
//             return data
//         }
//     })
//     // console.log(donationData)
//     if (isLoading) {
//         return <LoadingSpinner></LoadingSpinner>
//     }
//     return (
//         <div>
//             <Container>
//                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//                     {
//                         donationData.map(donation => <DonationCard key={donation._id} donation={donation}></DonationCard>)
//                     }
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default DonationCampaigns;