import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Lottie from 'lottie-react';
import loginLottie from "../../assets/lotties/LogIn-lottie.json"

const LogIn = () => {
    const { signInUser } = use(AuthContext)
    const handleRegister = e => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        // const name = form.name.value;
        const password = form.password.value;

        //firebase user Creation
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error);
            })
        // console.log(email, name, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-[250px]' animationData={loginLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
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

                                <button className="btn btn-neutral mt-4">Log In</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;