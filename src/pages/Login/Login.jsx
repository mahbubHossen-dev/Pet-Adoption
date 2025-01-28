import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Container from '../../components/Container';
import toast from 'react-hot-toast';
import axios from 'axios';
import Social from '../../components/Social';

const Login = () => {
    const { user, signInUser } = useAuth()
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
                
                // navigate(location.state ? `${location.state}` : '/')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    

    return (
        <Container>
            <div className='py-12 pt-24 bg-[#05212A]'>

                <div className="bg-cover  bg-center flex items-center justify-center">
                    <div className="bg-white p-8 rounded-md w-full max-w-md text-black">
                        <h2 className="text-3xl font-bold text-center mb-4">Log in!</h2>
                        <p className="text-center text-gray-600 mb-6 ita">Welcome to movie CinemaVibe.</p>

                        <form onSubmit={handleLogin}
                        >
                            <div className="mb-4">
                                <label className="block text-sm mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-full p-3 rounded-md  text-black border-2"
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
                                        className="w-full p-3 rounded-md  text-black  border-2"
                                        type='password'
                                        name='password'

                                    />
                                    <span className="absolute left-3 top-3 text-gray-400">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-6">

                                <a href="#" className="text-sm text-red-500 hover:underline">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-500 hover:bg-red-600 transition text-white font-bold py-3 rounded-md"
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
    );
};

export default Login;