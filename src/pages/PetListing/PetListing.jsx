
import Container from '../../components/Container';
import PetCard from '../../components/PetCard';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Select } from '@headlessui/react'
import toast from 'react-hot-toast';

const PetListing = () => {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")


    const { data: pets = [] } = useQuery({
        queryKey: ['allPets', search, category],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/pets?category=${category.toLowerCase()}&search=${search}`)
                // const filter = data.filter(pet => pet.adopted === false)
                // console.log(filter)
                return data
            } catch (error) {
                console.log(error.response.data)
                toast.error(error.response.data)
            }
        }
    })
    // co
    return (
        <div>
            <Container>
                <div className=''>
                <h1 className='text-center text-2xl mb-6'>Not Adopted Pets</h1>
                    <div className='flex justify-between items-center'>
                        <Select onChange={(e) => setCategory(e.target.value)} defaultValue={'Category'} name="status" aria-label="Project status" className="border data-[hover]:shadow data-[focus]:bg-blue-100">
                            <option value="Category" disabled>Category</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>

                            <option value="Bird">Bird</option>
                            <option value="Fish">Fish</option>
                        </Select>
                        <div className=''>
                            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search' className='border-2 mb-6 p-2 rounded-full' />
                        </div>
                    </div>
                    <div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {
                                pets.map(pet => <PetCard key={pet._id} pet={pet}></PetCard>)
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PetListing;