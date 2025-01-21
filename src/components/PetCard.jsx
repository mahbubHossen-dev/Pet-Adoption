import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({pet}) => {
    const {image, name, age, location, category,date, _id} = pet || {}
    return (
        <div>
            <div className='bg-red-400  p-4'>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>{age}</p>
                <p>{location}</p>
                <p>{category}</p>
                <p>{date}</p>
                <Link to={`/details/${_id}`}><button>See Details</button></Link>
            </div>
        </div>
    );
};

export default PetCard;