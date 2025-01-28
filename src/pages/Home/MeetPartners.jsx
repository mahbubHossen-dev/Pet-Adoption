import React from 'react';
import partner1 from '../../assets/pertners/partner-1.jpg'
import partner2 from '../../assets/pertners/partner-2.jpg'
import partner3 from '../../assets/pertners/partner-3.jpg'
import partner4 from '../../assets/pertners/partner-4.jpg'

const MeetPartners = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-center text-2xl'>Meet Our Partners</h1>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <div className='text-center'>
                    <img src={partner1} alt="" />
                    <div className='mt-4 '>
                        <h3 className='text-xl font-medium'>Thomas Nick</h3>
                        <p>Pet Sitter</p>
                    </div>
                </div>
                <div className='text-center'>
                    <img src={partner2} alt="" />
                    <div className='mt-4 '>
                        <h3 className='text-xl font-medium'>Lucy Anderson</h3>
                        <p>Pet Grommer</p>
                    </div>
                </div>
                <div className='text-center'>
                    <img src={partner3} alt="" />
                    <div className='mt-4 '>
                        <h3 className='text-xl font-medium'>Daniel Jacob</h3>
                        <p>Pet Doctor</p>
                    </div>
                </div>
                <div className='text-center'>
                    <img src={partner1} alt="" />
                    <div className='mt-4 '>
                        <h3 className='text-xl font-medium'>James Harry</h3>
                        <p>Pet Sitter</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetPartners;