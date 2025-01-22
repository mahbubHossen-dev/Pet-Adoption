
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from '../../components/Container';
import DonateModal from '../../components/DonateModal';

const DonationDetails = () => {

    const donationDetails = useLoaderData()
    const { name, image, max_donation_amount, donated_amount, date, _id } = donationDetails || {}

    return (
        <Container>
            <div className='md:flex gap-8 bg-red-200'>

                <div>
                    <h3 className='text-2xl'>Name: {name}</h3>
                    <p>Age: {max_donation_amount}</p>
                    <p>Age: {donated_amount}</p>
                    <p>Description</p>
                    <DonateModal></DonateModal>
                    {/* <AdoptModal handleAdoptModal={handleAdoptModal} data={data}></AdoptModal> */}
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>

        </Container>
    );
};

export default DonationDetails;