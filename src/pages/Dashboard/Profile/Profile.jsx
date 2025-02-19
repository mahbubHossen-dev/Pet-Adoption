import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Profile = () => {
    const {user} = useAuth()
    console.log(user)
    return (
        <div>
            <div className='mt-12 space-y-2'>
                <img src={user?.photoURL} alt="" className='w-40 h-40 rounded-full'/>
                <p className='text-xl font-medium'>{user?.displayName}</p>
                <p>Email: {user?.email}</p>
            </div>
            <div></div>
        </div>
    );
};

export default Profile;