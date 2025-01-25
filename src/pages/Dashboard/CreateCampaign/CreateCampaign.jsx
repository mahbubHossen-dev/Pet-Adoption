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
            lastDateOfDonation: data.lastDate,
            name: data.name,
            image,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            createDate: new Date(),
            email: user?.email,
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
            <h1>Create Donation Campaigns</h1>

            <CampaignsForm myPet={false} onSubmit={onSubmit}></CampaignsForm>
        </div>
    );
};

export default CreateCampaign;