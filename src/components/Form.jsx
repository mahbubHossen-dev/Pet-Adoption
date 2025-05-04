import Select from 'react-select';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ myPet, onSubmit, selectedOption, setSelectedOption }) => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const options = [
        { value: 'Dog', label: 'Dog' },
        { value: 'Cat', label: 'Cat' },
        { value: 'Bird', label: 'Bird' },
        { value: 'Fish', label: 'Fish' },
    ];
    const { name, image, age, location, longDescription, shortDescription } = myPet || {}

    return (
        <div className=' text-black p-12'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                    {/* Name */}
                    <div className=''>
                        <label>Name</label><br />
                        <input defaultValue={myPet ? name : ""} className='w-full py-2 border-2 rounded-lg' {...register("name", { required: true })} /> <br />
                        {errors.name && <span>Name is required</span>}
                    </div>

                    {/* Pet location */}
                    <div>
                        <label>Pet location</label><br />
                        <input defaultValue={myPet ? location : ""} className='w-full py-2 border-2 rounded-lg' {...register("location", { required: true })} /> <br />
                        {errors.location && <span>Location is required</span>}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Age */}
                    <div>
                        <label>Pet Age</label><br />
                        <input defaultValue={myPet ? age : ""} type='number' className='w-full py-2 border-2 rounded-lg' {...register("age", { required: true })} /> <br />
                        {errors.age && <span>Age is required</span>}
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


                    {/* File Upload */}
                    <div className="mb-6">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                            Select Image
                        </label>

                        <div className="relative">
                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                {...register("image", { required: true })}
                                className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
                cursor-pointer"
                            />
                        </div>

                        {errors.image && (
                            <span className="text-sm text-red-500 mt-1 block">Image is required</span>
                        )}
                    </div>

                </div>

                {/* Short Description */}
                <div>
                    <label>Short Description</label><br />
                    <input defaultValue={myPet ? shortDescription : ""} className='w-full py-2 border-2 rounded-lg' {...register("shortDescription", { required: true })} /> <br />
                    {errors.shortDescription && <span>Short Description is required</span>}
                </div>

                {/* Long Description */}
                <div>

                    <label>Long Description</label><br />
                    <textarea defaultValue={myPet ? longDescription : ""} className='w-full py-2 border-2 rounded-lg' rows={5} {...register("longDescription", { required: true })}></textarea>

                    {errors.longDescription && <span>Long Description is required</span>}
                </div>



                <div className='text-center'>
                    <input className='bg-orange-600 text-white mx-auto py-2 px-6 hover:bg-orange-200 hover:text-black  rounded-full cursor-pointer' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Form;