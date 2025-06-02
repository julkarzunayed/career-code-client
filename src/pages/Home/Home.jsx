import React, { Suspense, useEffect, useState } from 'react';
import Banner from './Banner';
import HotJobsToDay from './HotJobsToDay/HotJobsToDay';
import Loader from '../Loader/Loader';

const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());
const Home = () => {
    // const [jobsPromise, setJobsPromise] = useState();
    // useEffect(() => {
    //     fetch('http://localhost:3000/jobs')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loader></Loader>}>
                <HotJobsToDay jobsPromise={jobsPromise}></HotJobsToDay>
            </Suspense>
        </div>
    );
};

export default Home;