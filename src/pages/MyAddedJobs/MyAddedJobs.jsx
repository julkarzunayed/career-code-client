import React, { Suspense } from 'react';
import Loader from '../Loader/Loader';
import MyAddedJobsTable from './MyAddedJobsTable';
import { myAddedJobsPromise } from '../../apis/myAddedJobsPromise';
import useAuth from '../../Hooks/useAuth';

const MyAddedJobs = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1 className="text-center font-bold text-3xl mt-10">Your Added Jobs</h1>
            <div className="">
                <Suspense fallback={Loader}>
                    <MyAddedJobsTable myAddedJobsPromise={myAddedJobsPromise(user.email)} />
                </Suspense>
            </div>
        </div>
    );
};

export default MyAddedJobs;