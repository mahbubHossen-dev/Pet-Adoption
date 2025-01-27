import React from 'react';
import Sidebar from '../Sidebar/Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import Container from '../../../components/Container';
import { Outlet } from 'react-router-dom';
import Navbar from './../../Shared/Navbar';

const Dashboard = () => {
    return (
        <div className=''>
            <Container>
                <Navbar></Navbar>
                <div className='grid grid-cols-12 '>
                    <div className='col-span-3'>
                        <Sidebar></Sidebar>
                    </div>

                    <div className='col-span-9 bg-gray-300'>
                        <Outlet></Outlet>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Dashboard;