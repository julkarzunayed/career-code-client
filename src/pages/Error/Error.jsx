import React from 'react';
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className='text-center mt-16'>
            <h1 className="text-7xl text-red-500 ">Error</h1>
            <NavLink className='btn mt-4' to='/'>Back to Home</NavLink>
        </div>
    );
};

export default Error;