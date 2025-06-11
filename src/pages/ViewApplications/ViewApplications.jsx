import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applicants = useLoaderData();
    return (
        <div className='py-10'>
            <h1 className="text-3xl text-center">Applicant of {job_id}</h1>
            <h2 className='text-center text-2xl font-bold'>Total applicant: {applicants.length}</h2>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='font-bold'>
                                <th>#</th>
                                <td>Email</td>
                                <td>GitHub</td>
                                <td>LinkedIn</td>
                                <td>Resume</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {
                                applicants.map((applicant, i) => <tr key={applicant._id}>
                                    <th>{i + 1}</th>
                                    <td>{applicant.applicant}</td>
                                    <td><a target='_blank' href={applicant.gitHub}>GitHub</a></td>
                                    <td><a target='_blank' href={applicant.linkedIn}>Linked In</a></td>
                                    <td><a target='_blank' href={applicant.resume}>Resume</a></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewApplications;