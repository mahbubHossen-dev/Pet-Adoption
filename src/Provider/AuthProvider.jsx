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
        setLoading(true)
        return signOut(auth)
    }
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
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
        const unsubscribe = onAuthStateChanged(auth, currUser => {
            if (currUser) {
                setUser(currUser)
                const user = {email: currUser?.email}

                axios.post(`http://localhost:3000/jwt`, user, {withCredentials: true})
                    .then(data => console.log(data.data))

            } else {
                setUser(null)
                axios.post('http://localhost:3000/logout', {}, {withCredentials: true})
                    .then(data => console.log(data.data))
            }
            setLoading(false)

        })


        return () => {
            unsubscribe()
        }

    }, [])


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, async (currUser) => {                
            
    //             if(currUser?.email){
    //                 setUser(currUser    )
                   
    //                 console.log(currUser)
    //                 try {
    //                     const {data} = await axios.post(`http://localhost:3000/jwt`, user, {withCredentials: true})
    //                     console.log(data)
    //                     setUser(currUser)
    //                     setLoading(false)
    //                 } catch (error) {
    //                     console.log(error)
    //                 }
    //             }
    //             else{
    //                 try {
    //                     const {data} = await axios.post(`http://localhost:3000/logout`, {}, {withCredentials: true})
    //                     console.log('logout', data)
    //                     setLoading(false)
                        
    //                 } catch (error) {
    //                     console.log(error)
    //                 }
    //                 setUser(null)
    //             }


                
    //             setLoading(false)
            
    //     })
    //     return () => {
    //         return unsubscribe()
    //     }
    // }, [])

    

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