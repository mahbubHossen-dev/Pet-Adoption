import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import useAdmin from '../../../../hooks/useAdmin';

const Sidebar = () => {
    const [isAdmin] = useAdmin()
    const menuRef = useRef()
    // const handleMenuClose = () => {
    //     menuRef.current.style.transform = 'translateX(-0px)'
    //     menuRef.current.style.width = '0px'
    // }
    // const isAdmin = true
    return (
        <div ref={menuRef} className='p-6 min-h-screen hidden md:block bg-blue-400 transition duration-500 '>
            {/* <button onClick={handleMenuClose}>X</button> */}
            {
                isAdmin ?
                    <>
                        <div >
                            <ul className=' space-y-2'>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/addPet'}>Add a pet</NavLink></li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myAddedPets'}>My added pets</NavLink></li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/adoptionRequest'}>Adoption Request</NavLink></li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/createCampaign'}>Create Donation Campaign</NavLink></li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myDonationCampaigns'}>My Donation Campaigns</NavLink></li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myDonations'}>My Donations</NavLink></li>
                            </ul>
                        </div>

                        <div>
                            <ul className='border-t-2 mt-6 pt-6 space-y-2'>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to='/'>
                                    Home
                                </NavLink></li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'>
                                    <NavLink to='/pets' className=''>
                                        Pet Listing
                                    </NavLink>
                                </li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'>
                                    <NavLink to='/donationCampaigns' className=''>
                                        Donation Campaigns
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className='border-t-2 mt-6 pt-6'>
                            <ul className=' space-y-2'>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/users'}>Users</NavLink></li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/allPets'}>All Pets</NavLink></li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/allDonations'}>All Donations</NavLink></li>
                            </ul>
                        </div>

                    </> :
                    <div >
                        <ul className=' space-y-2'>
                            <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/addPet'}>Add a pet</NavLink></li>
                            <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myAddedPets'}>My added pets</NavLink></li>
                            <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/adoptionRequest'}>Adoption Request</NavLink></li>
                            <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/createCampaign'}>Create Donation Campaign</NavLink></li>
                            <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myDonationCampaigns'}>My Donation Campaigns</NavLink></li>
                            <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myDonations'}>My Donations</NavLink></li>
                        </ul>

                            <ul className='border-t-2 mt-6 pt-6 space-y-2'>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to='/'>
                                    Home
                                </NavLink></li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'>
                                    <NavLink to='/pets' className=''>
                                        Pet Listing
                                    </NavLink>
                                </li>
                                <li className='bg-blue-600 py-1 px-2 text-white rounded-md'>
                                    <NavLink to='/donationCampaigns' className=''>
                                        Donation Campaigns
                                    </NavLink>
                                </li>
                            </ul>
                    </div>
            }
        </div>
    );
};

export default Sidebar;