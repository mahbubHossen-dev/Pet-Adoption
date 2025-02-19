import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import avatarImg from '../../assets/placeholder.jpg'
import { AiOutlineMenu } from 'react-icons/ai';
import useAuth from '../../hooks/useAuth';
import Container from '../../components/Container';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    // console.log(isDarkMood)
    const [isScroll, setIsScroll] = useState(false)
    const location = useLocation()
    // console.log(location.pathname)

    // if () {

    // }
    // console.log(user)

    const handleLogOut = async () => {
        signOutUser()
            .then(() => {
                toast.success('Logout success!')
            })
            .catch(err => {
                toast.err(err.message)
            })

    }
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (scrollY > 50) {
    //             setIsScroll(true)
    //         } else {
    //             setIsScroll(false)
    //         }
    //     })
    // }, [])


    const menuLinks = <>

        {/* {
            location.pathname == '/' ? <li><a href={`${location.pathname == '/' ? '#top' : '/'}`} className='font-Ovo'>Home</a></li> : <li><Link  to='/' className='font-Ovo'>Home</Link></li>
        } */}

        <li className='text-black text-md'>
            <NavLink to='/' className='px-3 py-1 rounded-full'>Home</NavLink>
        </li>
        <li className='text-black text-md'>
            <NavLink to='/pets' className='px-3 py-1 rounded-full'>
                Pet Listing
            </NavLink>
        </li>
        <li className=' text-black text-md'>
            <NavLink to='/donationCampaigns' className='px-3 rounded-full py-1'>
                Donation Campaigns
            </NavLink>
        </li>
        {
            user && <>
                <li className=' text-black text-md'>
            <NavLink to='/dashboard' className='px-3 rounded-full py-1'>
                Dashboard
            </NavLink>
        </li>
        <li className=' text-black text-md'>
            <NavLink to='/faq' className='px-3 rounded-full py-1'>
                FAQ
            </NavLink>
        </li>
            </>
        }
    </>

    return (
        <div className='bg-orange-500 fixed w-full top-0 z-50' >
            <Container>
                <div>
                    {
                        <div className=''>
                            {/* <img src={} alt="" className='w-full' /> */}
                        </div>
                    }


                    <nav className={`flex justify-between items-center py-3 z-50  backdrop-blur-lg `}>
                        <h1 className='text-3xl font-medium text-white' >Paws & Hearts</h1>

                        <ul className={`hidden md:flex items-center md:gap-6 lg:gap-8 rounded-full py-3 px-12  bg-[#FCB98B]`}>
                            {menuLinks}
                        </ul>



                        <div className='relative'>
                            <div className='flex flex-row items-center gap-3'>
                                {/* Dropdown btn */}
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='p-4 md:py-1 md:px-2 border-[1px] border-[#FCB98B]  flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
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
                                                    to='/dashboard'
                                                    className='px-4 py-3 hover:bg-orange-500 transition font-semibold border-b border-orange-500'
                                                >
                                                    Dashboard
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

                    </nav>


                </div>
            </Container>
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