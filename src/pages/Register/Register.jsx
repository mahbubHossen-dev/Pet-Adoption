import React, { useState } from 'react';
import { FaGoogle, FaUser, FaEnvelope, FaLock, FaImage } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { getImageURL } from '../../api/utils';
import Social from '../../components/Social';

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [errorMessage, setErrorMessage] = useState("")
    const { createUser, setUser, googleLogin, updateUserProfile } = useAuth()
    const [fileName, setFileName] = useState("");
    const handleRegister = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.files[0]
        const password = form.password.value;




        setErrorMessage("")

        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters')

            return
        }

        const hasUppercase = /(?=.*[A-Z])/;
        const hasLowercase = /(?=.*[a-z])/;
        if (!hasUppercase.test(password)) {
            setErrorMessage('The password must contain at least one uppercase letter.')
            return
        }

        if (!hasLowercase.test(password)) {
            setErrorMessage('The password must contain at least one lowercase letter.')
            return
        }

        // image post
        const photoURL = await getImageURL(image)
        console.log(photoURL)
        // User Registration
        try {
            const result = await createUser(email, password)
            await updateUserProfile(name, photoURL)

            setUser(result.user)

            await axios.post(`http://localhost:3000/users/${result.user?.email}`, {
                name: result.user?.displayName,
                image: result.user?.photoURL,
                email: result.user?.email,
            })
            console.log(result.user)
            navigate(location.state ? `${location.state}` : '/')
            // console.log(result)
            toast.success("Register Success")
        } catch (error) {
            console.log(error)
        }

        // createUser(email, password)
        //     .then(result => {
        //         // setUser(result.user)
        //         toast.success("Register Success")
        //         updateUserProfile(name, photoURL)
        //             .then(() => {
        //                 setUser(result.user)

        //             })
        //             .catch(err => {
        //                 toast.error(err.message)
        //             })
        //         navigate(location.state ? `${location.state}` : '/')

        //     })
        //     .catch(err => {
        //         toast.error(err.message)
        //     })
    }

    // const handleGoogleLogin = () => {
    //     googleLogin()
    //         .then(result => {
    //             toast.success("Register Success")
    //             setUser(result.user)
    //             navigate(location.state ? location.state : '/')
    //         })
    //         .catch(err => {
    //             toast.error(err.message)
    //         })
    // }

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // ইউজার যে ফাইল সিলেক্ট করবে
        if (file) {
            setFileName(file.name); // ফাইলের নাম স্টেটে সেট করা হচ্ছে
        } else {
            setFileName(""); // যদি ফাইল রিমুভ করা হয়
        }
    };

    return (
        <div className='py-12 bg-[#05212A]'>

            <div className="bg-cover bg-center min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-md w-full max-w-md text-white">
                    <h2 className="text-3xl font-bold text-center mb-4 text-black">Register</h2>
                    <p className="text-center text-gray-600 mb-6">
                        Create an account and join the movie CinemaVibe!
                    </p>

                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-sm mb-2">
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full pl-10 p-3 rounded-md border-2 text-black placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label htmlFor="email" className="block text-sm mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full pl-10 p-3 rounded-md border-2 text-black placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        




                        <div className="relative">
                            <label className="block text-sm mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full pl-10 p-3 rounded-md border-2 text-black placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* file Upload */}
                        <div className="mb-4 relative">
                            <label htmlFor="image" className="block text-sm mb-2">
                                Select Image
                            </label>

                            <input
                                type="file"
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                name="image"
                                required
                                accept="image/*"
                                onChange={handleFileChange} // ইভেন্ট হ্যান্ডলার যোগ করা হয়েছে
                            />

                            {fileName && (
                                <p className="mt-2 text-sm text-gray-700">
                                    Selected File: <strong>{fileName}</strong>
                                </p>
                            )}
                        </div>



                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 transition text-white font-bold py-3 rounded-md"
                        >
                            Register
                        </button>
                    </form>

                    <Social></Social>

                    <p className="text-center text-gray-600 mt-6">Already have an account?<Link to='/login' className="text-red-500 hover:underline"> Log in here!</Link>
                    </p>

                    {
                        errorMessage && <p className='text-center text-red-500 mt-6 font-medium text-lg'>{errorMessage}</p>
                    }
                </div>

            </div>

        </div>
    );
};

export default Register;