import React from 'react';

const PetCard = ({pet}) => {
    const {pet_image, pet_name, pet_age, pet_location, pet_category} = pet || {}
    return (
        <div>
            <div className='bg-red-400'>
                <img src={pet_image} alt="" />
                <h3>{pet_name}</h3>
                <p>{pet_age}</p>
                <p>{pet_location}</p>
                <p>{pet_category}</p>
                <button>See Details</button>
            </div>
        </div>
    );
};

export default PetCard;