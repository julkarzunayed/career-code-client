import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/Loader/Loader';

const PrivetRout = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    
    if(isLoading){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate to="/logIn" state={location.pathname}></Navigate>
    }
    return children ;
};

export default PrivetRout;