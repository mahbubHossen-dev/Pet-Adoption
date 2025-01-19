
import Banner from './Banner';
import Container from '../../components/Container';
import Category from './Category';
import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'
import PetCard from '../../components/PetCard';

const Home = () => {

    const [category, setCategory] = useState("")
    const { data: pets = [] } = useQuery({
        queryKey: ['pets', category],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/pets/${category}`)
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })



    return (
        <div>
            <Container>
                <Banner></Banner>
            </Container>
            <Container>
                <Category setCategory={setCategory}></Category>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        pets.map((pet, idx) => <PetCard key={idx} pet={pet}></PetCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;