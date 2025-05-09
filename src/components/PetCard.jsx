import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ pet }) => {
    const { image, name, age, location, category, date, _id } = pet || {}
    return (
        <div>
            <div className=' rounded-lg shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),_0px_3px_7px_-3px_rgba(0,0,0,0.3)]'>
                <img src={image} className='h-52 w-full object-cover rounded-lg' alt="" />
                <div className='p-4'>
                    <h3 className='text-xl font-medium'>{name}</h3>
                    <p className='text-lg mb-2'>Age: {age}</p>
                    <Link to={`/details/${_id}`}><button className='py-2 px-3 bg-orange-500 text-white rounded-full w-full'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PetCard;