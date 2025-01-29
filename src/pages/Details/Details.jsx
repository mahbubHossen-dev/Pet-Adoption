
import React from 'react';
import Container from '../../components/Container';
import banner from '../../assets/public/work-3.png'
import { useLoaderData, useParams } from 'react-router-dom';
import AdoptModal from '../../components/AdoptModal';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const Details = () => {
    const axiosSecure = useAxiosSecure()
    
    const { user } = useAuth()
    const data = useLoaderData()
    const { name, image, age, location, shortDescription, longDescription, _id } = data || {}
    // console.log(data)

    const handleAdoptModal = async (e, closeModal) => {
        e.preventDefault()
        console.log('click')
        const form = e.target;
        const phone = form.phone.value
        const address = form.address.value

        const adoptionRequestData = {
            adoptionStatus: 'requested',
            adoptReqUserInfo: {
                name: user?.displayName,
                email: user?.email,
                phone,
                address
            },
        }
        console.log(adoptionRequestData)
        try {
            const { data } = await axiosSecure.patch(`/adoptionRequest/${_id}`, adoptionRequestData)
            if(data.modifiedCount > 0){
                toast.success('Request send successful!')
            }
            
            
        } catch (error) {
            toast.error(error.response.data)
            console.log(error)
        }finally{
            closeModal()
        }
    }

    return (
        <div className='py-16'>
            <Container>
            <div className='md:flex gap-8 bg-orange-100'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl'>Name: {name}</h3>
                    <p>Age: {age}</p>
                    <p>Location: {location}</p>
                    <p>{shortDescription}</p>
                    <p>{longDescription}</p>
                    <AdoptModal handleAdoptModal={handleAdoptModal} data={data}></AdoptModal>
                </div>
            </div>

        </Container>
        </div>
    );
};

export default Details;