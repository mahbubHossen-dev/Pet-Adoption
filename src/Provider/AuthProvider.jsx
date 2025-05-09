import React, { createContext, useEffect, useState } from 'react';
import auth from './../../firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GithubAuthProvider } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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
        const unsubscribe = onAuthStateChanged(auth, async (currUser) => {
            if (currUser) {
                setUser(currUser);
                const user = { email: currUser.email };

                try {
                    await axios.post('https://pet-adoption-server-psi.vercel.app/jwt', user, {
                        withCredentials: true,
                    });
                    
                } catch (err) {
                    console.error(' JWT set failed', err);
                }

            } else {
                setUser(null);
                await axios.post('https://pet-adoption-server-psi.vercel.app/logout', {}, {
                    withCredentials: true,
                });
                console.log('🧹 Cookie cleared');
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);


    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        signOutUser,
        googleLogin,
        githubLogin,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;