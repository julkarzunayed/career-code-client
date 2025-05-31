import React, { use } from 'react';
import JobCard from './JobCard';

const HotJobsToDay = ({jobsPromise}) => {
    
    const jobs = use(jobsPromise);
    // console.log(jobs)
    return (
        <div className=''>
            <h1 className="text-center text-5xl font-bold mt-6 py-10">Todays Hot jobs</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    jobs.map(job => <JobCard
                        job={job}
                        key={job._id}></JobCard>)
                }
            </div>
            
        </div>
    );
};

export default HotJobsToDay;