import React from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const CampaignsForm = ({onSubmit}) => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    

    return (
        <div className=' text-black p-12'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Name */}
                    <div className=''>
                        <label>Name</label><br />
                        <input type='text' className='w-full py-2 border-2 rounded-lg' {...register("name", { required: true })} /> <br />
                        {errors.name && <span>Name is required</span>}
                    </div>

                    {/* Maximum Donation Amount */}
                    <div className=''>
                        <label>Maximum Donation Amount</label><br />
                        <input type='number' className='w-full py-2 border-2 rounded-lg' {...register("maxDonate", { required: true })} /> <br />
                        {errors.name && <span>Maximum Donation is required</span>}
                    </div>

                    {/* Last Date of Donation */}
                    <div>
                        <label>Last Date of Donation</label><br />
                        <input type='number' className='w-full py-2 border-2 rounded-lg' {...register("lastDate", { required: true })} /> <br />
                        {errors.age && <span>Last Date is required</span>}
                    </div>

                    {/* Short Description */}
                    <div>
                        <label>Short Description</label><br />
                        <input type='text' className='w-full py-2 border-2 rounded-lg' {...register("shortDescription", { required: true })} /> <br />
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

                        <input  {...register("image", { required: true })} type="file" required accept='image/*' />
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

export default CampaignsForm;