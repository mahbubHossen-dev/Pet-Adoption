import React from 'react';
import missionImg from '../../assets/mision/mission.jpg'
const OurMission = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-24'>
            <div>
                <img src={missionImg} alt="" />
            </div>
            <div>
                <h1 className='text-2xl'>Our Mission</h1>
                <p className='my-4'>To provide loving homes for homeless animals, promote responsible pet ownership, and create a compassionate community committed to animal welfare and care.</p>

                <ul className='ml-14 mt-8 mb-4'>
                    <li className='list-disc'>Find safe and caring homes for abandoned and rescued animals.</li>
                    <li className='list-disc'>Raise awareness about the rights and well-being of animals</li>
                    <li className='list-disc'>Educate people on proper care and responsibilities of pet ownership.</li>
                    <li className='list-disc'>Work actively to reduce the number of stray animals.</li>
                </ul>

                <p className='mt-6'>Dedicated to finding loving homes for animals, promoting responsible pet ownership, and fostering a compassionate world where every animal is valued and cared for.</p>
            </div>
        </div>
    );
};

export default OurMission;