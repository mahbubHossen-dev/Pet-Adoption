import axios from 'axios';
import useAuth from './useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'https://pet-adoption-server-psi.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {signOutUser} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(response => {
            return response;
        }, async error => {
            console.log(error)
            if(error.status === 401 || error.status === 403){
                // user logout
                signOutUser()
                .then(() => {
                    navigate('/login')
                })
            }

            return Promise.reject(error)
        })
    }, [signOutUser, navigate])

    return axiosSecure;
};

export default useAxiosSecure;