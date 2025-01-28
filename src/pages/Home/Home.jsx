
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

const Home = () => {

    const [category, setCategory] = useState("")
    const { data: pets = [], isLoading, refetch } = useQuery({
        queryKey: ['pets', category],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/petsHome?category=${category.toLowerCase()}`)
                refetch()
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })

    // useEffect(() => {
    //     fetch(`http://localhost:3000/petsHome?category=${category.toLowerCase()}`)
    //     .then(res => res.json())
    //     .then(data => (data))
    // }, [category])


    console.log(pets)

    // if (isLoading) {
    //     return <LoadingSpinner></LoadingSpinner>
    // }

    return (
        <div>
            <Container>
                <Banner></Banner>
            </Container>
            <Container>
                <Category setCategory={setCategory}></Category>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12'>
                    {
                        pets.slice(0, 6).map((pet, idx) => <PetCard key={idx} pet={pet}></PetCard>)
                    }
                </div>

                <Inspire></Inspire>

                <MeetPartners></MeetPartners>

                <OurMission></OurMission>

                <About></About>
            </Container>
        </div>
    );
};

export default Home;