import React from 'react';
import CampaignsForm from './CampaignsForm';
import { getImageURL } from './../api/utils';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';

const EditDonation = () => {
    const {id} = useParams()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location)
    const onSubmit =async (data) => {
        const imageUrl = await getImageURL(data.image[0])

        const updateDonationData = {
            max_donation_amount: data.maxDonate,
            lastDateOfDonation: data.lastDate,
            name: data.name,
            image: imageUrl,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            updateDate: new Date(), 
        }
         console.log(updateDonationData)
        try {
            const {data} =await axiosSecure.patch(`/editDonation/${id}`, updateDonationData)
            navigate(`${location.state ? location.state: '/dashboard'}`)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        // console.log(updateDonationData)
        // console.log(imageUrl)
    }

    return (
        <div>
            <CampaignsForm onSubmit={onSubmit}></CampaignsForm>
        </div>
    );
};

export default EditDonation;