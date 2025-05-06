import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar/Sidebar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { AiOutlineMenu } from 'react-icons/ai';

const Dashboard = () => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const { signOutUser } = useAuth()

    const [isOpen, setIsOpen] = useState(false)

    const handleLogOut = async () => {
        signOutUser()
            .then(() => {
                toast.success('Logout success!')
                navigate('/')
            })
            .catch(err => {
                toast.err(err.message)
            })
    }
    return (
        <div className=''>
            <div className='grid md:grid-cols-12 relative bg-orange-100 min-h-screen gap-12'>
                {/* <button onClick={handleLogOut} className='bg-orange-300 text-white py-2 px-3  font-bold absolute right-2 top-6'>
                    <Link>Logout</Link>
                </button> */}


                <div className='py-2 px-3  font-bold absolute right-2 top-6 z-50'>
                    <div className='relative'>
                        <div className='flex flex-row items-center gap-3'>
                            {/* Dropdown btn */}
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className='p-4 md:py-1 md:px-2 border-[1px] border-[#FCB98B]  flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                            >
                                <p className='font-normal'>Profile</p>
                                <div className='hidden md:block'>
                                    {/* Avatar */}
                                    <img
                                        className='rounded-full'
                                        referrerPolicy='no-referrer'
                                        src={user ? user.photoURL : avatarImg}
                                        alt='profile'
                                        height='30'
                                        width='30'
                                    />
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                            <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-[#FCB98B] overflow-hidden right-0 top-12 text-sm'>
                                <div className='flex flex-col cursor-pointer'>
                                    <Link
                                        to='/'
                                        className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        Home
                                    </Link>

                                    {user ? (
                                        <>
                                            <Link
                                                to='/dashboard/profile'
                                                className='px-4 py-3 hover:bg-orange-500 transition font-semibold border-b border-orange-500'
                                            >
                                                See Profile
                                            </Link>
                                            <div
                                                onClick={handleLogOut}
                                                className='px-4 py-3 hover:bg-orange-500 transition font-semibold cursor-pointer'
                                            >
                                                Logout
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                to='/login'
                                                className='px-4 py-3 hover:bg-orange-500 transition font-semibold border-b border-orange-500 '
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to='/signup'
                                                className='px-4 py-3 hover:bg-orange-500  transition font-semibold'
                                            >
                                                Sign Up
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='md:col-span-3 z-50'>
                    <Sidebar></Sidebar>
                </div>

                <div className='md:col-span-8 bg-[#] pt-12'>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;