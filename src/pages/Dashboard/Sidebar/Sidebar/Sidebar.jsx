import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const menuRef = useRef()
    // const handleMenuClose = () => {
    //     menuRef.current.style.transform = 'translateX(-0px)'
    //     menuRef.current.style.width = '0px'
    // }
    return (
        <div ref={menuRef} className='p-6 min-h-screen hidden md:block bg-blue-400 transition duration-500 '>
            {/* <button onClick={handleMenuClose}>X</button> */}
            <div >
                <ul className=' space-y-2'>
                    <li><NavLink to={'/dashboard/addPet'}>Add a pet</NavLink></li>
                    <li><NavLink to={'/dashboard/myAddedPets'}>My added pets</NavLink></li>
                    <li><NavLink to={'/dashboard/adoptionRequest'}>Adoption Request</NavLink></li>
                    <li><NavLink to={'/dashboard/createCampaign'}>Create Donation Campaign</NavLink></li>
                    <li><NavLink to={'/dashboard/myDonationCampaigns'}>My Donation Campaigns</NavLink></li>
                    <li><NavLink to={'/dashboard/myDonations'}>My Donations</NavLink></li>
                </ul>
            </div>

            <div className='mt-8'>
                <ul className=' space-y-2'>
                    <li><NavLink to={'/dashboard/users'}>Users</NavLink></li>
                    <li><NavLink to={'/dashboard/allPets'}>All Pets</NavLink></li>
                    <li><NavLink to={'/dashboard/allDonations'}>All Donations</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;