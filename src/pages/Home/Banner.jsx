import React from 'react';
import banner from '../../assets/public/work-3.png'
const Banner = () => {
    return (
        <div className='h-[70vh] w-full mt-12'>
            <img className='h-full w-full object-cover' src={banner} alt="" />
        </div>
    );
};

export default Banner;