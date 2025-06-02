import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">About</NavLink></li>
        {
            user && <li><NavLink to="/myApplications">My Applications</NavLink></li>
        }
    </>

    //Firebase User LogOut
    const handleUserLogOut = () => {
        logOutUser()
            .then(() => {
                alert(('userLogOut'))
            })
            .catch(error => {
                // 
                console.log(error)
            })
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleUserLogOut} className='btn'>Log Out</button> : <>
                        <button className='btn'>
                            <NavLink to="/register">Register</NavLink>
                        </button>
                        <button className='btn ml-2'>
                            <NavLink to="/logIn">logIn</NavLink>
                        </button>

                    </>
                }

            </div>
        </div>
    );
};

export default NavBar;