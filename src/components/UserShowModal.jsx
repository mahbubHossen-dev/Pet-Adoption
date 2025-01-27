import { Dialog, Input, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";
import banner from '../assets/public/work-2.png'
import useAuth from '../hooks/useAuth'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { FaEye } from 'react-icons/fa6';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useParams } from 'react-router-dom';

const UserShowModal = ({ handleShowUser, id, userDonationData }) => {

    let [isOpen, setIsOpen] = useState(false)
    
    // console.log(donation)
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
                    onClick={() => handleShowUser(id, openModal)}
                    className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    <FaEye />
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
                                    

                                    <Table>
                                        <TableCaption>A list of your recent invoices.</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>s/n</TableHead>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Email</TableHead>
                                                <TableHead>Amount</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {
                                                userDonationData?.map((donation, idx) => <TableRow key={donation._id}>
                                                    <TableCell className="font-medium">{idx + 1}</TableCell>

                                                    <TableCell className="font-medium">{donation.donarInfo.name}</TableCell>

                                                    <TableCell className="font-medium">{donation.donarInfo.email}</TableCell>

                                                    <TableCell className="font-medium">${donation.donarInfo.amount}</TableCell>

                                                    
                                                </TableRow>)
                                            }
                                        </TableBody>
                                    </Table>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default UserShowModal