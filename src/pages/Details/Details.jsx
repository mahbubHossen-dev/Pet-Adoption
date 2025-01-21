
import React from 'react';
import Container from '../../components/Container';
import banner from '../../assets/public/work-3.png'
import { useLoaderData, useParams } from 'react-router-dom';
import AdoptModal from '../../components/AdoptModal';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
const Details = () => {
    const { user } = useAuth()
    const data = useLoaderData()
    const { name, image, age, location, _id } = data || {}
    console.log(data)

    const handleAdoptModal = async (e, closeModal) => {
        e.preventDefault()
        const form = e.target;
        const phone = form.phone.value
        const address = form.address.value

        const adoptionRequestData = {
            petId: _id,
            pet_name: name,
            image,
            age,
            user: {
                user_name: user?.displayName,
                email: user?.email,
                phone,
                address
            },
            status: 'requested'
        }
        try {
            const { data } = await axios.post('http://localhost:3000/adoptionRequest', adoptionRequestData)
            console.log(data)
            toast.success('Request send successful!')
            
        } catch (error) {
            toast.error(error.response.data)
        }finally{
            closeModal()
        }
    }

    return (
        <Container>
            <div className='md:flex gap-8 bg-red-200'>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl'>Name: {name}</h3>
                    <p>Age: {age}</p>
                    <p>Location: {location}</p>
                    <AdoptModal handleAdoptModal={handleAdoptModal} data={data}></AdoptModal>
                </div>
            </div>

        </Container>
    );
};

export default Details;