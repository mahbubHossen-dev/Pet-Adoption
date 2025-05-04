
import Banner from './Banner';
import Container from '../../components/Container';
import Category from './Category';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'
import PetCard from '../../components/PetCard';
import Inspire from './Inspire';
import MeetPartners from './MeetPartners';
import OurMission from './OurMission';
import About from './About';
import LoadingSpinner from '../../components/LoadingSpinner';
import PetServices from './PetServices';
import Feedback from './Feedback';
import NewsLater from './NewsLater';
import Achievements from './Achievements';

const Home = () => {

    const [category, setCategory] = useState("")
    const { data: pets = [], isLoading, refetch } = useQuery({
        queryKey: ['pets', category],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`https://pet-adoption-server-psi.vercel.app/petsHome?category=${category.toLowerCase()}`)
                refetch()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })

    // useEffect(() => {
    //     fetch(`https://pet-adoption-server-psi.vercel.app/petsHome?category=${category.toLowerCase()}`)
    //     .then(res => res.json())
    //     .then(data => (data))
    // }, [category])


    console.log(pets)

    // if (isLoading) {
    //     return <LoadingSpinner></LoadingSpinner>
    // }

    return (
        <div className='pt-20'>
            <Container>
                <Banner></Banner>
            </Container>
            <Container>
                <Category setCategory={setCategory}></Category>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-12'>
                    {
                        pets.slice(0, 6).map((pet, idx) => <PetCard key={idx} pet={pet}></PetCard>)
                    }
                </div>

                <Inspire></Inspire>

                <PetServices></PetServices>

                <MeetPartners></MeetPartners>

                <OurMission></OurMission>

                <About></About>

                {/* <Achievements></Achievements> */}

                <Feedback></Feedback>

                <NewsLater></NewsLater>
            </Container>
        </div>
    );
};

export default Home;