import React, { Suspense, use } from 'react';
import MyApplicationsStat from './MyApplicationsStat';
import MyApplicationsTable from './MyApplicationsTable';
import Loader from '../Loader/Loader';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router';

const fetchApplicationPromise = email => {
    return fetch(`http://localhost:3000/applications?email=${email}`).then(result => result.json());
}

const MyApplications = () => {
    const { user } = useAuth()
    const applicationPromise = fetchApplicationPromise(user.email);

    return (
        <div className=''>
            <h1 className="text-center text-4xl font-bold my-10">My Applications</h1>
            <div className="flex justify-center ">
                <MyApplicationsStat></MyApplicationsStat>
            </div>
            <Suspense fallback={<Loader></Loader>}>
                <MyApplicationsTable
                    applicationPromise={applicationPromise}></MyApplicationsTable>
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