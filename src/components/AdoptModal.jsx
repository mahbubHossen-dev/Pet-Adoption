import { Dialog, Input, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import banner from '../assets/public/work-2.png'
import useAuth from '../hooks/useAuth'
const AdoptModal = ({ data, handleAdoptModal }) => {
    const { user } = useAuth()
    let [isOpen, setIsOpen] = useState(false)
    const { name, image, age, location, _id } = data || {}




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
                    Adopt
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
                                        <p>Pet_ID: {_id}</p>
                                        <h3>Pet Name: {name}</h3>
                                        <h3>Your Name: {user?.displayName}</h3>
                                        <h3>Your Email: {user?.email}</h3>
                                        <img className='h-20 w-20' src={banner} alt="" />
                                        <form onSubmit={(e) => handleAdoptModal(e, closeModal)} action="" className='space-y-2'>

                                            <div>
                                                <label >Phone:</label>
                                                <input type="number" name="phone" className="border data-[hover]:shadow data-[focus]:bg-blue-100" required />
                                            </div>
                                            <div>
                                                <label >Address:</label>
                                                <input type="text" name="address" className="border data-[hover]:shadow data-[focus]:bg-blue-100" required />
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <button

                                                    type="submit"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

                                                >
                                                    Send Adoption Request!
                                                </button>
                                                <button
                                                    onClick={closeModal}
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"

                                                >
                                                    <MdOutlineCancel className='text-2xl font-thin'/>
                                                </button>
                                            </div>

                                        </form>

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
export default AdoptModal