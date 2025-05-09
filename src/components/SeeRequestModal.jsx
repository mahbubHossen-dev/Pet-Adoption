import { Dialog, Input, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import banner from '../assets/public/work-2.png'
import useAuth from '../hooks/useAuth'
import AdoptionRequest from './../pages/Dashboard/AdoptionRequest/AdoptionRequest';


const SeeRequestModal = ({ data, handleAdoptModal }) => {
    const { user } = useAuth()
    let [isOpen, setIsOpen] = useState(false)
    

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex items-center text-center justify-center pt-[10px]">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md border border-orange-600 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Who Request?
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
                                        <p>Name: {data.adoptReqUserInfo.name}</p>
                                        <h3>Email: {data.adoptReqUserInfo.email}</h3>
                                        <h3>Phone Number: {data.adoptReqUserInfo.phone}</h3>
                                        <h3>Address: {data.adoptReqUserInfo.address}</h3>

                                        
                                        <button
                                            onClick={closeModal}
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

                                        >
                                            <MdOutlineCancel className='text-2xl font-thin' />
                                        </button>
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
export default SeeRequestModal;