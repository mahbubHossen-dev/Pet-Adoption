import React, { createContext, useEffect, useState } from 'react';
import auth from './../../firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user)
    // console.log(user)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currUser) => {
            
                
                // console.log('state capture', currUser?.email)

                if(currUser?.email){
                    setUser(currUser)
                    const user = {email: currUser?.email}
                    console.log(user)
                    try {
                        const {data} = await axios.post(`http://localhost:3000/jwt`, user, {withCredentials: true})
                        console.log(data)
                        setLoading(false)
                    } catch (error) {
                        console.log(error)
                    }
                }
                else{
                    try {
                        const {data} = await axios.post(`http://localhost:3000/logout`, {}, {withCredentials: true})
                        console.log('logout', data)
                        setLoading(false)
                    } catch (error) {
                        console.log(error)
                    }
                }


                
                setLoading(false)
            
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        signOutUser,
        googleLogin,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;