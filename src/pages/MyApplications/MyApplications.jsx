import React, { Suspense } from 'react';
import MyApplicationsStat from './MyApplicationsStat';
import MyApplicationsTable from './MyApplicationsTable';
import Loader from '../Loader/Loader';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router';
import { myApplicationPromise } from '../../apis/myApplicationsPromise';



const MyApplications = () => {
    const { user } = useAuth()
    // const applicationPromise = fetchApplicationPromise(user.email);

    return (
        <div className=''>
            <h1 className="text-center text-4xl font-bold my-10">My Applications</h1>
            <div className="flex justify-center ">
                <MyApplicationsStat></MyApplicationsStat>
            </div>
            <Suspense fallback={<Loader></Loader>}>
                <MyApplicationsTable
                    myApplicationPromise={myApplicationPromise(user.email)}></MyApplicationsTable>
            </Suspense>
            <div className="flex justify-center my-5">
                <Link
                    to='/'
                    className='btn'>Apply for mor jobs
                </Link>
            </div>

        </div>
    );
};

export default MyApplications;