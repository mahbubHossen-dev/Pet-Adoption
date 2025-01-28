import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const Footer = () => {
    const {user} = useAuth()
    return (
        <div className='bg-[#1F2937] '>
            <footer className="md:flex justify-around gap-4 p-10 mx-auto">
                <aside className='text-white'>
                    <h1 className='text-3xl font-medium italic'>Paws & Hearts</h1>
                    <p className='w-60'>
                        Pet Adoption.
                        <br />
                        <p className='w-72'>Every pet deserves a loving home and a caring family. By adopting, you&apos;re not just rescuing a pet, but also gaining a loyal companion for life. Join us in making a difference—adopt, love, and cherish a furry friend today!&quot;</p>
                    </p>
                </aside>
                <nav className='text-white flex flex-col'>
                    <h6 className="text-2xl font-medium mb-4">Services</h6>
                    <Link to='/' className="">Home</Link>
                    <Link to='/pets' className="">Pet List</Link>
                    <Link to='/addServices' className="">Pet Campaigns</Link>
                    
                </nav>

                <nav className='text-white'>
                    <h6 className="text-2xl font-medium mb-4">Social</h6>
                    <div className='flex gap-4'>
                        <Link to='https://www.facebook.com/mahbub.hossen.1/' target='_blank'><FaFacebook className='text-3xl' /></Link>
                        <Link to='https://github.com/MahbubHosssen' target='_blank'><FaLinkedin className='text-3xl' /></Link>
                        <Link to='https://github.com/MahbubHosssen' target='_blank'><FaGithub className='text-3xl' /></Link>
                    </div>

                </nav>
            </footer>
            <footer className="p-4 bg-[#1F2937] border-t border-gray-600">
                <aside className='text-white text-center'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by RM Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;