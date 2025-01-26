import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    console.log(donation)
    const {name, image, max_donation_amount, donated_amount, date, _id} = donation || {}
    return (
        
            <div className='p-4 shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),_0px_2px_16px_0px_rgba(14,30,37,0.32)] '>
                <img src={image} className='h-52 w-full object-cover' alt="" />
                <h3>{name}</h3>
                <p>Max Donation Amount: ${max_donation_amount}</p>
                <p>Donated Amount: ${donated_amount}</p>
                <p>{date}</p>
                <Link to={`/donationDetails/${_id}`}><button className='bg-orange-200 py-2 px-6 rounded-xl'>See Details</button></Link>
            </div>
        
    );
};

export default DonationCard;