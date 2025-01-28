import React, { useState } from 'react';
import Form from './form';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { getImageURL } from '../api/utils';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';

const UpdateMyPet = () => {
    const { user } = useAuth()
    const [selectedOption, setSelectedOption] = useState(null);
    const {id} = useParams()
    const navigate= useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const { data: myPet = {} } = useQuery({
        queryKey: ['pets', user?.email],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/details/${id}`)
            return data
        }
    })
    
    const onSubmit = async (data) => {
        
        
        const image = await getImageURL(data.image[0])

        const updatePetData = {
            name: data.name,
            image,
            age: data.age,
            location: data.location,
            category: selectedOption.value,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            date: new Date(),
            email: user?.email,
            adopted: false
        }
        try {
            const { data } = await axiosSecure.patch(`/updatePet/${id}`, updatePetData)
            console.log(data)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Pet Updated successfully",
                showConfirmButton: false,
                timer: 1500,

            });
            navigate(location.state ? location.state: '/dashboard')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Form myPet={myPet} onSubmit={onSubmit} selectedOption={selectedOption} setSelectedOption={setSelectedOption}></Form>
        </div>
    );
};

export default UpdateMyPet;