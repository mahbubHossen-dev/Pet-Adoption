
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const Social = () => {
    const {googleLogin, githubLogin} = useAuth()
    const handleGoogleLogin = () => {
        googleLogin()
            .then(async result => {
                console.log(result.user)
                await axios.post(`http://localhost:3000/users/${result.user?.email}`, {
                    name: result.user?.displayName,
                    image: result.user?.photoURL,
                    email: result.user?.email,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleGithubLogin = () => {
        githubLogin()
        .then(async result => {
            console.log(result.user)
            toast.success('Login success with github')
            await axios.post(`http://localhost:3000/users/${result.user?.email}`, {
                name: result.user?.displayName,
                image: result.user?.photoURL,
                email: result.user?.email,
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className='flex gap-4'>
            <button
                onClick={handleGoogleLogin}
                className="mt-4 w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 rounded-md"
            >
                {/* <FaGoogle className="mr-2" /> Login with Google */}Google
            </button>
            <button
                onClick={handleGithubLogin}
                className="mt-4 w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 rounded-md"
            >
                {/* <FaGoogle className="mr-2" /> Login with Google */}Github
            </button>
        </div>
    );
};

export default Social;