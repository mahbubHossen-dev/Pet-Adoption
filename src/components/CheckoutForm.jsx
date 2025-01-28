
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import './CheckoutForm.css';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import { MdOutlineCancel } from 'react-icons/md';

const CheckoutForm = ({ amount, donationDetails, closeModal, setPetInDetails }) => {
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        getPaymentIntent()

    }, [amount])
    // console.log(clientSecret)
    // console.log(donationDetails._id)
    const getPaymentIntent = async () => {
        try {
            const { data } = await axiosSecure.post('https://pet-adoption-server-psi.vercel.app/create-payment-intent', {
                petId: donationDetails.petId,
                amount,
                donationId: donationDetails?._id
            })
            setClientSecret(data.clientSecret)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        // confirm payment
        const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email
                },
            },
        })
        if (paymentIntent.status === 'succeeded') {
            const donationPetDetails = {

                petId: donationDetails._id,
                name: donationDetails.name,
                donarInfo: {
                    amount: Number(amount),
                    email: user?.email,
                    name: user?.displayName,
                },
                pause: false,
            }

            try {
                const { data } = await axiosSecure.post(`http://localhost:3000/add-donation`, donationPetDetails)
                if(data.insertedId){
                    const {data} = await axiosSecure.get('/threePets')
                    setPetInDetails(data) 
                    closeModal()
                    // console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className='flex justify-between '>
                <button className='font-medium py-1 px-4 mt-4 rounded-md text-white/ bg-green-400' type="submit" disabled={!stripe}>
                    Pay {amount}
                </button>
                <button
                    onClick={closeModal}
                    type="button"
                    className='font-medium py-1 px-4 mt-4 rounded-md  border border-transparent bg-blue-100 text-sm text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                >
                    <MdOutlineCancel className='text-2xl font-thin' />
                </button>


            </div>
        </form>
    );
};


export default CheckoutForm;