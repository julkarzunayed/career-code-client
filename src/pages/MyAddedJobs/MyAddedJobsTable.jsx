import React, { use } from 'react';

const MyAddedJobsTable = ({ myAddedJobsPromise }) => {
    const jobs = use(myAddedJobsPromise);
    // console.log(jobs);
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.status}</td>
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