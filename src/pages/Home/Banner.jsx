import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <motion.h1
                        animate={{
                            rotate: 180,
                            scale: 1,
                            transition: { duration: 2 },

                        }}
                        className="text-5xl font-bold">Remote Jobs For You</motion.h1>
                    <motion.h1
                        initial={{
                            scale: 0.85
                        }}
                        animate={{
                            // repeatCount: Infinity,
                            scale: 1,
                            transition: { duration: 2, repeat: Infinity },

                        }}
                        className="text-5xl font-bold">
                        Remote
                        <motion.span 
                         animate={{
                            color: ['#33ff33', '#ff5533', '#8a33ff'],
                            transition: {duration: 1.5, repeat: Infinity}
                         }}
                        >Jobs</motion.span>
                        For You</motion.h1>
                    <p className="py-6 max-w-sm">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <motion.button
                        whileTap={{ scale: 0.90 }}
                        className="btn btn-primary target:bg-amber-600">Get Started</motion.button>
                </div>
            </div>
        </div>
    );
};

export default Banner;