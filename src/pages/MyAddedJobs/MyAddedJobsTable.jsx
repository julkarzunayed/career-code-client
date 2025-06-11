import React, { use } from 'react';
import { Link } from 'react-router';

const MyAddedJobsTable = ({ myAddedJobsPromise }) => {
    const jobs = use(myAddedJobsPromise);
    console.log(jobs);
    return (
        <div className='py-10'>
            <h2 className="text-center text-xl font-bold">Your Added jobs No: {jobs?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='font-bold'>
                            <th>#</th>
                            <td>Name</td>
                            <td>Deadline</td>
                            <td>Status</td>
                            <td>Applicant</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.status}</td>
                                <td><Link to={`/myAddedJob/${job._id}`}>View Applicant</Link></td>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAddedJobsTable;