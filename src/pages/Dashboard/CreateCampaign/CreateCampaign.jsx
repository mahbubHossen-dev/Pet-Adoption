import React from 'react';
import CampaignsForm from '../../../components/CampaignsForm';
import { getImageURL } from '../../../api/utils';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const CreateCampaign = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async(data) => {
        const image = await getImageURL(data.image[0])
        console.log(data)
        const campaignData = {
            max_donation_amount: data.maxDonate,
            lastDateOfDonation: data.date,
            name: data.name,
            image,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            createDate: new Date(),
            email: user?.email,
            pause: false
        }
        try {
            const {data} =await axiosSecure.post('/addDonationCampaign', campaignData)
            console.log(data)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Campaign Donation added successfully",
                showConfirmButton: false,
                timer: 1500,
                
              });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className=' text-black p-12'>
            <h3 className='text-2xl font-medium text-center mb-4'>Create Donation Campaigns</h3>
            <CampaignsForm myPet={false} onSubmit={onSubmit}></CampaignsForm>
        </div>
    );
};

export default CreateCampaign;