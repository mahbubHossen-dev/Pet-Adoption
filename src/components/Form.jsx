import Select from 'react-select';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = ({myPet, onSubmit, selectedOption, setSelectedOption}) => {
    
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Name */}
                    <div className=''>
                        <label>Name</label><br />
                        <input defaultValue={myPet ? name : ""} className='w-full py-2 border-2 rounded-lg' {...register("name", { required: true })} /> <br />
                        {errors.name && <span>Name is required</span>}
                    </div>

                    {/* Age */}
                    <div>
                        <label>Pet Age</label><br />
                        <input  defaultValue={myPet ? age : ""} type='number' className='w-full py-2 border-2 rounded-lg' {...register("age", { required: true })} /> <br />
                        {errors.age && <span>Age is required</span>}
                    </div>

                    {/* Pet location */}
                    <div>
                        <label>Pet location</label><br />
                        <input  defaultValue={myPet ? location : ""} className='w-full py-2 border-2 rounded-lg' {...register("location", { required: true })} /> <br />
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
                        <input defaultValue={myPet ? shortDescription : ""} className='w-full py-2 border-2 rounded-lg' {...register("shortDescription", { required: true })} /> <br />
                        {errors.shortDescription && <span>Short Description is required</span>}
                    </div>

                    {/* Long Description */}
                    <div>

                        <label>Long Description</label><br />
                        <textarea defaultValue={myPet ? longDescription : ""} className='w-full py-2 border-2 rounded-lg' rows={5} {...register("longDescription", { required: true })}></textarea>

                        {errors.longDescription && <span>Long Description is required</span>}
                    </div>

                    {/* file Upload */}
                    <div className="mb-4 relative">
                        <label htmlFor="image" className="block text-sm mb-2">
                            Select Image
                        </label>

                        <input defaultValue={myPet ? image : ""} {...register("image", { required: true })} type="file" required accept='image/*' />
                        {errors.file && <span>Image is required</span>}
                    </div>
                </div>

                <div className='text-center'>
                    <input className='bg-red-200 mx-auto py-2 px-4 rounded-full cursor-pointer' type="submit" />

                </div>
            </form>
        </div>
    );
};

export default Form;