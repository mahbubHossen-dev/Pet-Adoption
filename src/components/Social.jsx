
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const Social = () => {
    const {googleLogin} = useAuth()
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
    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                className="mt-4 w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 rounded-md"
            >
                {/* <FaGoogle className="mr-2" /> Login with Google */}Google
            </button>
        </div>
    );
};

export default Social;