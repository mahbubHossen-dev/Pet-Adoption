import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import closeBlackIcon from '../../assets/close-black.png'
import avatarImg from '../../assets/placeholder.jpg'
import { AiOutlineDownload, AiOutlineMenu } from 'react-icons/ai';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user, signOutUser } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    // console.log(isDarkMood)
    const [isScroll, setIsScroll] = useState(false)
    const location = useLocation()
    console.log(location.pathname)

    // if () {

    // }
    // console.log(user)

    const handleLogOut = async () => {
        signOutUser()
            .then(() => {
                console.log('logout success')
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })

    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])


    const menuLinks = <>

        {/* {
            location.pathname == '/' ? <li><a href={`${location.pathname == '/' ? '#top' : '/'}`} className='font-Ovo'>Home</a></li> : <li><Link  to='/' className='font-Ovo'>Home</Link></li>
        } */}

        <Link to='/' className='hidden md:block px-4 py-3  '>
            Home
        </Link>
        <Link to='/petListing' className='hidden md:block px-4 py-3  '>
            Pet Listing
        </Link>
        <Link to='/donationCampaigns' className='hidden md:block px-4 py-3  '>
            Donation Campaigns
        </Link>
    </>

    return (
        <div>
            {
                <div className='fixed top-0 right-0 w-11/12 translate-y-[-85%]  '>
                    {/* <img src={} alt="" className='w-full' /> */}
                </div>
            }


            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] flex justify-between items-center py-4 z-50 ${isScroll && 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-[#11001F] dark:shadow-white/20'}`}>
                <Link to={{ hash: '#top' }}>MH B</Link>

                <ul className={`hidden md:flex items-center md:gap-6 lg:gap-8 rounded-full py-3 px-12  shadow-sm bg-opacity-50 z-50 ${isScroll || 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                    {menuLinks}
                </ul>



                <div className='relative'>
                    <div className='flex flex-row items-center gap-3'>
                        {/* Dropdown btn */}
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                        >
                            <AiOutlineMenu />
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
                        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
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
                                            to='/dashboard'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Dashboard
                                        </Link>
                                        <div
                                            onClick={handleLogOut}
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                        >
                                            Logout
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to='/login'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to='/signup'
                                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>

            </nav>


        </div>
    );
};

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import avatarImg from '../../assets/placeholder.jpg'
// import { AiOutlineMenu } from 'react-icons/ai';
// import useAuth from '../../hooks/useAuth';
// const Navbar = () => {
//     const {user} = useAuth()
//     const [isOpen, setIsOpen] = useState(false)
//     return (

//         <div className='fixed w-full bg-white z-10 shadow-sm'>
//             <div className='py-4 border-b-[1px]'>
//                 <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
//                     {/* Logo */}
//                     <Link to='/'>
//                         {/* <img src="" alt='logo' width='100' height='100' /> */}
//                         Rate
//                     </Link>
//                     <ul className='flex gap-2'>
//                         <li><Link></Link></li>
//                         <li><Link></Link></li>
//                         <li><Link></Link></li>
//                         <li><Link></Link></li>
//                         <li><Link></Link></li>
//                     </ul>

//                     {/* Dropdown Menu */}
//                     <div className='relative'>
//                         <div className='flex flex-row items-center gap-3'>
//                             {/* Dropdown btn */}
//                             <div
//                                 onClick={() => setIsOpen(!isOpen)}
//                                 className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
//                             >
//                                 <AiOutlineMenu />
//                                 <div className='hidden md:block'>
//                                     {/* Avatar */}
//                                     <img
//                                         className='rounded-full'
//                                         referrerPolicy='no-referrer'
//                                         src={user && user.photoURL ? user.photoURL : avatarImg}
//                                         alt='profile'
//                                         height='30'
//                                         width='30'
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         {isOpen && (
//                             <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
//                                 <div className='flex flex-col cursor-pointer'>
//                                     <Link
//                                         to='/'
//                                         className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
//                                     >
//                                         Home
//                                     </Link>

//                                     {user ? (
//                                         <>
//                                             <Link
//                                                 to='/dashboard'
//                                                 className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
//                                             >
//                                                 Dashboard
//                                             </Link>
//                                             <div
//                                                 // onClick={logOut}
//                                                 className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
//                                             >
//                                                 Logout
//                                             </div>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Link
//                                                 to='/login'
//                                                 className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
//                                             >
//                                                 Login
//                                             </Link>
//                                             <Link
//                                                 to='/signup'
//                                                 className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
//                                             >
//                                                 Sign Up
//                                             </Link>
//                                         </>
//                                     )}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;