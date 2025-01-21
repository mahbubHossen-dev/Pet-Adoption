import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    console.log(donation)
    const {name, image, max_donation_amount, donated_amount, date, _id} = donation || {}
    return (
        <div>
            <div className='bg-red-400  p-4'>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>${max_donation_amount}</p>
                <p>${donated_amount}</p>
                <p>{date}</p>
                <Link to={`/donationDetails/${_id}`}><button>See Details</button></Link>
            </div>
        </div>
    );
};

export default DonationCard;