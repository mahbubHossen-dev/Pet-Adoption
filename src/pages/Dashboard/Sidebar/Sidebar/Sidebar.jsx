import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useAuth from "../../../../hooks/useAuth";
import useAdmin from "../../../../hooks/useAdmin";
import { GrOverview } from "react-icons/gr";
import { BiSolidAlarmAdd } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { LiaDonateSolid } from "react-icons/lia";
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdOutlineCampaign } from "react-icons/md";
import { FaDonate, FaHome, FaUsers } from "react-icons/fa";
import { PiListHeartBold } from "react-icons/pi";
import { SiCampaignmonitor, SiPetsathome } from "react-icons/si";
import { HiOutlineViewGridAdd } from "react-icons/hi";


const Sidebar = () => {
    const { user } = useAuth()
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
                                        <li className='block'><NavLink className={` hover:bg-orange-600 p-2 text-white flex items-center gap-2`} to={'/dashboard/statics'}><HiOutlineViewGridAdd  className="text-xl" /> Statics</NavLink></li>
                                        : <li className='block'><NavLink className={` hover:bg-orange-600 p-2 text-white flex items-center gap-2`} to={'/dashboard/overview'}><GrOverview   className="text-xl"/> Overview</NavLink></li>

                                }
                                <li className='block'><NavLink className={` hover:bg-orange-600 p-2 text-white flex items-center gap-2`} to={'/dashboard/addPet'}><BiSolidAlarmAdd className="text-xl" /> Add a pet</NavLink></li>

                                <li className='block'><NavLink className={` hover:bg-orange-600 p-2 text-white flex items-center gap-2`} to={'/dashboard/myAddedPets'}><MdOutlinePets className="text-xl" /> My added pets</NavLink></li>

                                <li className='block'><NavLink className={` hover:bg-orange-600 p-2 text-white  flex items-center gap-2`} to={'/dashboard/adoptionRequest'}><VscGitPullRequestGoToChanges className="text-xl" /> Adoption Request</NavLink></li>

                                <li className='block'>
                                    <NavLink className={` hover:bg-orange-600 p-2 text-white  flex items-center gap-2`} to={'/dashboard/createCampaign'}>
                                        <LiaDonateSolid className="text-xl" />
                                        Create Donation Campaign</NavLink>

                                </li>

                                <li className='block'>
                                    <NavLink className={` hover:bg-orange-600 p-2 text-white  flex items-center gap-2`} to={'/dashboard/myDonationCampaigns'}><MdOutlineCampaign className="text-xl" /> My Donation Campaigns</NavLink>
                                </li>
                                <li className='block'><NavLink className={` hover:bg-orange-600 p-2 text-white  flex items-center gap-2`} to={'/dashboard/myDonations'}><BiSolidDonateBlood className="text-xl" /> My Donations</NavLink></li>
                            </ul>
                        </div>

                        <div>
                            <ul className='border-t-2  py-3'>
                                <li className='block'><NavLink to='/' className={` hover:bg-orange-600 p-2 text-white flex items-center gap-2`}>
                                    <FaHome className="text-xl" /> Home
                                </NavLink></li>
                                <li className='block'>
                                    <NavLink to='/pets' className={` hover:bg-orange-600 p-2 text-white flex items-center gap-2`}>
                                        <PiListHeartBold className="text-xl" /> Pet Listing
                                    </NavLink>
                                </li>
                                <li className='block'>
                                    <NavLink to='/donationCampaigns' className={` hover:bg-orange-600 p-2 text-white flex items-center gap-2`}>
                                        <SiCampaignmonitor className="text-xl" /> Donation Campaigns
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {
                            isAdmin ?
                                <div className='border-t-2  py-3'>
                                    <ul className=''>
                                        <li className='block'><NavLink to={'/dashboard/users'} className={` hover:bg-orange-600 p-2 text-white flex items-center gap-2`}><FaUsers className="text-xl" /> Users</NavLink></li>
                                        <li className='block'><NavLink to={'/dashboard/allPets'} className={` hover:bg-orange-600 p-2 text-white flex items-center gap-2`}><SiPetsathome className="text-xl" />
                                        All Pets</NavLink></li>
                                        <li className='block'><NavLink to={'/dashboard/allDonations'} className={` hover:bg-orange-600 p-2 text-white flex items-center gap-2`}><FaDonate className="text-xl" /> All Donations</NavLink></li>
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

