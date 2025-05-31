import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import HotJobsToDay from './HotJobsToDay/HotJobsToDay';

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
            <HotJobsToDay jobsPromise={jobsPromise}></HotJobsToDay>
        </div>
    );
};

export default Home;