import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useAuth from "../../../../hooks/useAuth";
import useAdmin from "../../../../hooks/useAdmin";


const Sidebar = () => {
    const {user} = useAuth()
    const [isOpen, setIsOpen] = useState(false);
    const [isAdmin, isAdminLoading] = useAdmin()
    // let isAdmin = false
    console.log(isAdmin)
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // if(user?.email === 'mahbubhossen172@gmail.com'){
    //     isAdmin = true
    // }

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

                </div>
            </div>
        </div>
    );
};

export default Sidebar;

