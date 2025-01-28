import React from 'react';
import Sidebar from '../Sidebar/Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import Container from '../../../components/Container';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './../../Shared/Navbar';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

const Dashboard = () => {
    const navigate = useNavigate()
    const { signOutUser } = useAuth()
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
            <Container>
                <div className='grid grid-cols-12 relative bg-gray-300'>
                    <button onClick={handleLogOut} className='bg-blue-200 py-2 px-3 text-gray-600 font-bold absolute right-2 top-6'>
                        <Link>Logout</Link>
                    </button>
                    <div className='col-span-3'>
                        <Sidebar></Sidebar>
                    </div>

                    <div className='col-span-9 bg-gray-300 pt-12'>
                        <Outlet></Outlet>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Dashboard;