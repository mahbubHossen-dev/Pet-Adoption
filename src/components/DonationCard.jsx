import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    console.log(donation)
    const { name, image, max_donation_amount, donated_amount, date, _id } = donation || {}
    return (

        <div className='p-4 shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),_0px_2px_16px_0px_rgba(14,30,37,0.32)] '>
            <img src={image} className='h-52 w-full object-cover' alt="" />
            <div className='space-y-1 mt-2'>
                <h3 className='text-xl font-medium'>{name}</h3>
                <div className='flex justify-between'>
                    <p>Max Donation Amount: </p>
                    <p>${max_donation_amount}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Donated Amount: </p>
                    <p>${donated_amount ? donated_amount : 0}</p>
                </div>
                <p>{date}</p>
            </div>
            <div className='text-right mt-2'>
                <Link to={`/donationDetails/${_id}`}><button className='bg-orange-200 py-2 px-6 rounded-xl'>See Details</button></Link>
            </div>
        </div>

    );
};

export default DonationCard;