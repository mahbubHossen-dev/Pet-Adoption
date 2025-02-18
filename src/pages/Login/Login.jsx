import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Container from '../../components/Container';
import toast from 'react-hot-toast';
import axios from 'axios';
import Social from '../../components/Social';
import Lottie from 'lottie-react';
import loginLottie from '../../../public/lottieLogin.json'

const Login = () => {
    const { user, signInUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [defaultPass, setDefaultPass] = useState('')
    // console.log(user)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;


        signInUser(email, password)

            .then(result => {
                console.log(result)
                toast.success("Login Success")

                navigate(location.state ? `${location.state}` : '/')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    const showUser = () => {
        setEmail('abc@gmail.com')
        setDefaultPass('123456Aa')
    }

    const showAdmin = () => {
        setEmail('mahbubhossen172@gmail.com')
        setDefaultPass('123456Aa')
    }

    return (
        <div className='pt-[95px] pb-6'>
            <Container>
                <div className=''>

                    <div className="bg-cover gap-6 bg-center flex items-center justify-center">
                        <div className=''>
                        <Lottie animationData={loginLottie}></Lottie>
                        </div>
                        <div className="bg-[#FCB98B] py-4 px-8 rounded-md w-full max-w-md text-black">
                            <h2 className="text-3xl font-bold text-center mb-4">Log in!</h2>
                            <p className="text-center text-gray-600 mb-6 ita">Welcome to Paws & Hearts</p>


                            <div className='space-x-4 text-right'>
                                <button onClick={showUser} className='border border-orange-500 py-1 px-2 rounded-md text-orange-500 bg-white/70'>User</button>
                                <button onClick={showAdmin} className='border border-orange-500 py-1 px-2 rounded-md text-orange-500 bg-white/70'>Admin</button>
                            </div>


                            <form onSubmit={handleLogin}
                            >
                                <div className="mb-4">
                                    <label className="block text-sm mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            defaultValue={email}
                                            className="py-2 outline-[#FA7316] w-full p-3 rounded-md  text-black border-2"
                                            type='email'
                                            name='email'

                                        />
                                        <span className="absolute left-3 top-3 text-gray-400">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            defaultValue={defaultPass}
                                            className="py-2 outline-orange-500 w-full p-3 rounded-md  text-black  border-2"
                                            type='password'
                                            name='password'
                                        />
                                        <span className="absolute left-3 top-3 text-gray-400">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-6">

                                    <a href="#" className="text-sm text-orange-700 hover:underline">
                                        Forgot password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-bold py-2 rounded-md"
                                >
                                    LOG IN
                                </button>
                            </form>

                            <Social></Social>

                            <p className="text-center text-gray-600 mt-6">New user?<Link to='/signUp' state="" className="text-red-500 hover:underline"> Register here!
                            </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;