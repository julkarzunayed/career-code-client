import React from 'react';
import { motion } from "motion/react"
import teem from "../../assets/teem/Teem.jpg"
import teem2 from "../../assets/teem/Developer_teem.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-10">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="flex-1">
                    <motion.img
                        src={teem}
                        animate={{
                            y: [30, 100, 30]
                        }}
                        transition={{ repeat: Infinity, duration: 7}}
                        className="max-w-sm border-l-10 border-b-10 border-blue-600 rounded-t-4xl rounded-br-4xl shadow-2xl"
                    />
                    <motion.img
                        src={teem2}
                        animate={{
                            x: [70, 150, 70]
                        }}
                        transition={{ repeat: Infinity, delay: 5, duration: 13}}
                        className="max-w-sm border-l-10 border-b-10 border-blue-600 rounded-t-4xl rounded-br-4xl shadow-2xl"
                    />
                    {/* <motion.img
                        src={teem2}
                        className="max-w-sm rounded-lg shadow-2xl"
                    /> */}
                </div>
                <div className='flex-1 '>
                    {/* <motion.h1
                        animate={{
                            // rotate: 180,
                            scale: 1,
                            y: [-200, 0, -200]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="text-5xl font-bold">Remote Jobs For You</motion.h1> */}
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
                                transition: { duration: 1.5, repeat: Infinity }
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