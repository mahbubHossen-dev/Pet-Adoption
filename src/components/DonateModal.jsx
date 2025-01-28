import { Dialog, Input, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import banner from '../assets/public/work-2.png'
import useAuth from '../hooks/useAuth'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const DonateModal = ({donationDetails, setPetInDetails}) => {
    const { user } = useAuth()
    let [isOpen, setIsOpen] = useState(false)
    const [amount, setAmount] = useState(1)
    // const { name, image, age, location, _id } = data || {}
    console.log(amount)
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex items-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Donate Now
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">


                                    <div className='space-y-2'>
                                        <div action="" className='space-y-2'>

                                            <div>
                                                <label >Donate Amount:</label>
                                                <input defaultValue={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" className="border data-[hover]:shadow data-[focus]:bg-blue-100" required />
                                            </div>
                                            
                                            {/* Checkout Form */}
                                            <Elements stripe={stripePromise}>
                                                    <CheckoutForm closeModal={closeModal} donationDetails={donationDetails} amount={amount}setPetInDetails={setPetInDetails}></CheckoutForm>
                                            </Elements>


                                            

                                        </div>

                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default DonateModal