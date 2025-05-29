import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

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

    const logOutUser = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = () => {
            onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setIsLoading(false)
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
        logOutUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;