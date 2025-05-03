
import { UpdateProfileModal } from '../../../components/UpdateProfileModal';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth()



    console.log(user)
    return (
        <div className='bg-orange-300 rounded-3xl mt-24 max-w-3xl mx-auto '>
            <div className='grid grid-cols-5 gap-4 p-8'>
                <div className=' col-span-2 bg-red-400 rounded-2xl  text-center p-6'>
                    <img src={user?.photoURL} alt="" className='w-40 h-40 rounded-full mx-auto' />
                    <p className='text-xl font-medium'>{user?.displayName}</p>
                    <p>{user?.email}</p>
                </div>
                <div className='col-span-3 bg-red-300 p-6 rounded-2xl '>
                    <h1 className='text-center font-bold text-xl'>Profile Details</h1>
                    <div className='flex justify-between mx-auto w-1/2 mt-4'>
                        <h5>Name:</h5>
                        <p>Mahbub</p>
                    </div>
                    <div className='flex justify-between mx-auto w-1/2 mt-4'>
                        <h5>Age:</h5>
                        <p>535</p>
                    </div>
                    <div className='flex justify-between mx-auto w-1/2 mt-4'>
                        <h5>Mobile:</h5>
                        <p>0162900</p>
                    </div>
                    <div className='flex justify-between mx-auto w-1/2 mt-4'>
                        <h5>Email:</h5>
                        <p>0162900</p>
                    </div>
                    <div className='flex justify-between mx-auto w-1/2 mt-4'>
                        <h5>Address:</h5>
                        <p>0162900</p>
                    </div>
                    <div className='text-right mt-4'>
                        <UpdateProfileModal />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;