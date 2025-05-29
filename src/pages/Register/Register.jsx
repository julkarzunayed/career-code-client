import Lottie from 'lottie-react';
import React, { use } from 'react';
import lottieFile from "../../assets/lotties/register.json"
import { AuthContext } from '../../context/AuthContext';
import SocialLogIn from '../Shared/SocialLogIn';

const Register = () => {
    const { createUser } = use(AuthContext)
    const handleRegister = e => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;

        //firebase user Creation
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error);
            })
        console.log(email, name, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-[250px]' animationData={lottieFile}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                {/* Name */}
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    required
                                    className="input"
                                    placeholder="Your Name" />
                                {/* Email */}
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    className="input"
                                    required
                                    placeholder="Email" />
                                {/* password */}
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    name='password'
                                    required
                                    className="input"
                                    placeholder="Password" />

                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                        <SocialLogIn></SocialLogIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;