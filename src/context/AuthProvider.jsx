import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //Sign in with Google 
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOutUser = () => {
        setIsLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = () => {
            onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setIsLoading(false);
                if(currentUser?.email){
                    const userData = {email: currentUser.email};
                    axios.post(`http://localhost:3000/jwt`, userData)
                        .then(res => {
                            console.log('token form jwt', res.data);

                        })
                        .catch(error => console.log(error));
                }
                // console.log(currentUser);
            });
        }
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = {
        isLoading,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        logOutUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;