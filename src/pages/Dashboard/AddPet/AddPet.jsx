import React, { useState } from 'react';
import ReactDOM from "react-dom"
import { useForm } from "react-hook-form"
import Select from 'react-select';
import { getImageURL } from '../../../api/utils';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
const AddPet = () => {
    const {user} = useAuth()
    const [selectedOption, setSelectedOption] = useState(null);
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = async(data) => {
        const image = await getImageURL(data.image[0])

        const petData = {
            name: data.name,
            image,
            age: data.age,
            location: data.location,
            category: selectedOption.value,
            date: new Date(),
            email: user?.email
        }
        try {
            const {data} =await axios.post('http://localhost:3000/addedPet', petData)
            console.log(data)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Pet added successfully",
                showConfirmButton: false,
                timer: 1500
              });
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(selectedOption.value)

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
        <div className=' text-black p-12'>
            <h1>Add Pet</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Name */}
                    <div className=''>
                        <label>Name</label><br />
                        <input className='w-full py-2 border-2 rounded-lg' {...register("name", { required: true })} /> <br />
                        {errors.name && <span>Name is required</span>}
                    </div>

                    {/* Age */}
                    <div>
                        <label>Pet Age</label><br />
                        <input type='number' className='w-full py-2 border-2 rounded-lg' {...register("age", { required: true })} /> <br />
                        {errors.age && <span>Age is required</span>}
                    </div>

                    {/* Pet location */}
                    <div>
                        <label>Pet location</label><br />
                        <input className='w-full py-2 border-2 rounded-lg' {...register("location", { required: true })} /> <br />
                        {errors.location && <span>Location is required</span>}
                    </div>



                    {/* Category */}

                    <div>
                        <label>Category</label>
                        <Select
                            className='w-full py-1 h-full rounded-lg'
                            required
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                        />
                    </div>

                    {/* Short Description */}
                    <div>
                        <label>Short Description</label><br />
                        <input className='w-full py-2 border-2 rounded-lg' {...register("shortDescription", { required: true })} /> <br />
                        {errors.shortDescription && <span>Short Description is required</span>}
                    </div>

                    {/* Long Description */}
                    <div>

                        <label>Long Description</label><br />
                        <textarea className='w-full py-2 border-2 rounded-lg' rows={5} {...register("longDescription", { required: true })}></textarea>

                        {errors.longDescription && <span>Long Description is required</span>}
                    </div>

                    {/* file Upload */}
                    <div className="mb-4 relative">
                        <label htmlFor="image" className="block text-sm mb-2">
                            Select Image
                        </label>

                        <input {...register("image", { required: true })} type="file" required accept='image/*' />
                        {errors.file && <span>Image is required</span>}
                    </div>
                </div>

                <div className='text-center'>
                    <input  className='bg-red-200 mx-auto py-2 px-4 rounded-full cursor-pointer' type="submit" />
                    
                </div>
            </form>
        </div>
    );
};

export default AddPet;