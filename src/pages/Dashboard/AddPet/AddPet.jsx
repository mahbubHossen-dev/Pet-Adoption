import React, { useState } from 'react';
import ReactDOM from "react-dom"
import { useForm } from "react-hook-form"
import Select from 'react-select';
import { getImageURL } from '../../../api/utils';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import Form from '../../../components/form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
const AddPet = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [selectedOption, setSelectedOption] = useState(null);
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = async(data) => {
        const image = await getImageURL(data.image[0])
        console.log(data)
        const petData = {
            name: data.name,
            image,
            age: data.age,
            location: data.location,
            category: (selectedOption.value).toLowerCase(),
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            createDate: new Date(),
            email: user?.email,
            adopted: false,
            date: new Date()
        }
        try {
            const {data} =await axiosSecure.post('/addedPet', petData)
            console.log(data)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Pet added successfully",
                showConfirmButton: false,
                timer: 1500,
                
              });
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(selectedOption.value)

    
    return (
        <div className=' text-black p-12'>
            <h1 className='text-2xl font-medium text-center'>Add Pet</h1>
            <Form myPet={false} onSubmit={onSubmit} selectedOption={selectedOption} setSelectedOption={setSelectedOption}></Form>
        </div>
    );
};

export default AddPet;