import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useAdmin from './../../../../hooks/useAdmin';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAdmin] = useAdmin()
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 fixed  top-4 left-4 z-50 bg-blue-600 text-white rounded-full"
                onClick={toggleSidebar}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-orange-500 p-6 transition-transform duration-300 ease-in-out md:translate-x-0 min-h-screen
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:static `}
            >
                <div className="menu-list">
                    <>
                        <div >
                            <ul className='pb-3'>
                                {
                                    isAdmin ?
                                        <li className=''><NavLink className={` hover:bg-orange-600 p-2 text-white block`} to={'/dashboard/statics'}>Statics</NavLink></li> 
                                        : <li className=''><NavLink className={` hover:bg-orange-600 p-2 text-white block`} to={'/dashboard/overview'}>Overview</NavLink></li>

                                }
                                <li className=''><NavLink className={` hover:bg-orange-600 p-2 text-white block`} to={'/dashboard/addPet'}>Add a pet</NavLink></li>
                                <li className='  '><NavLink className={` hover:bg-orange-600 p-2 text-white block`} to={'/dashboard/myAddedPets'}>My added pets</NavLink></li>
                                <li className='  '><NavLink className={` hover:bg-orange-600 p-2 text-white block`} to={'/dashboard/adoptionRequest'}>Adoption Request</NavLink></li>
                                <li className='  '><NavLink className={` hover:bg-orange-600 p-2 text-white block`} to={'/dashboard/createCampaign'}>Create Donation Campaign</NavLink></li>
                                <li className='  '><NavLink className={` hover:bg-orange-600 p-2 text-white block`} to={'/dashboard/myDonationCampaigns'}>My Donation Campaigns</NavLink></li>
                                <li className='  '><NavLink className={` hover:bg-orange-600 p-2 text-white block`} to={'/dashboard/myDonations'}>My Donations</NavLink></li>
                            </ul>
                        </div>

                        <div>
                            <ul className='border-t-2  py-3'>
                                <li className=''><NavLink to='/' className={` hover:bg-orange-600 p-2 text-white block`}>
                                    Home
                                </NavLink></li>
                                <li className=''>
                                    <NavLink to='/pets' className={` hover:bg-orange-600 p-2 text-white block`}>
                                        Pet Listing
                                    </NavLink>
                                </li>
                                <li className=''>
                                    <NavLink to='/donationCampaigns' className={` hover:bg-orange-600 p-2 text-white block`}>
                                        Donation Campaigns
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {
                            isAdmin ?
                                <div className='border-t-2  py-3'>
                                    <ul className=''>
                                        <li className=''><NavLink to={'/dashboard/users'} className={` hover:bg-orange-600 p-2 text-white block`}>Users</NavLink></li>
                                        <li className=''><NavLink to={'/dashboard/allPets'} className={` hover:bg-orange-600 p-2 text-white block`}>All Pets</NavLink></li>
                                        <li className=''><NavLink to={'/dashboard/allDonations'} className={` hover:bg-orange-600 p-2 text-white block`}>All Donations</NavLink></li>
                                    </ul>
                                </div> : ""
                        }

                    </>
                    {/* {
                isAdmin ?
                    :
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
            } */}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

// import React, { useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import useAdmin from '../../../../hooks/useAdmin';



// const Sidebar = () => {
//     const [isAdmin] = useAdmin()
//     const menuRef = useRef()
// const handleMenuClose = () => {
//     menuRef.current.style.transform = 'translateX(-0px)'
//     menuRef.current.style.width = '0px'
// }
// const isAdmin = true
//     return (
//         <div ref={menuRef} className='p-6 min-h-screen hidden md:block bg-blue-400 transition duration-500 '>
//             {/* <button onClick={handleMenuClose}>X</button> */}
//             {
//                 isAdmin ?
//                     <>
//                         <div >
//                             <ul className=' space-y-2'>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/addPet'}>Add a pet</NavLink></li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myAddedPets'}>My added pets</NavLink></li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/adoptionRequest'}>Adoption Request</NavLink></li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/createCampaign'}>Create Donation Campaign</NavLink></li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myDonationCampaigns'}>My Donation Campaigns</NavLink></li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myDonations'}>My Donations</NavLink></li>
//                             </ul>
//                         </div>

//                         <div>
//                             <ul className='border-t-2 mt-6 pt-6 space-y-2'>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to='/'>
//                                     Home
//                                 </NavLink></li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'>
//                                     <NavLink to='/pets' className=''>
//                                         Pet Listing
//                                     </NavLink>
//                                 </li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'>
//                                     <NavLink to='/donationCampaigns' className=''>
//                                         Donation Campaigns
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div className='border-t-2 mt-6 pt-6'>
//                             <ul className=' space-y-2'>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/users'}>Users</NavLink></li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/allPets'}>All Pets</NavLink></li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/allDonations'}>All Donations</NavLink></li>
//                             </ul>
//                         </div>

//                     </> :
//                     <div >
//                         <ul className=' space-y-2'>
//                             <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/addPet'}>Add a pet</NavLink></li>
//                             <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myAddedPets'}>My added pets</NavLink></li>
//                             <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/adoptionRequest'}>Adoption Request</NavLink></li>
//                             <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/createCampaign'}>Create Donation Campaign</NavLink></li>
//                             <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myDonationCampaigns'}>My Donation Campaigns</NavLink></li>
//                             <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to={'/dashboard/myDonations'}>My Donations</NavLink></li>
//                         </ul>

//                             <ul className='border-t-2 mt-6 pt-6 space-y-2'>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'><NavLink to='/'>
//                                     Home
//                                 </NavLink></li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'>
//                                     <NavLink to='/pets' className=''>
//                                         Pet Listing
//                                     </NavLink>
//                                 </li>
//                                 <li className='bg-blue-600 py-1 px-2 text-white rounded-md'>
//                                     <NavLink to='/donationCampaigns' className=''>
//                                         Donation Campaigns
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                     </div>
//             }
//         </div>
//     );
// };

// export default Sidebar;