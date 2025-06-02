import React, { use } from 'react';
import MyApplicationTableRow from './MyApplicationTableRow';
import { Link } from 'react-router';

const MyApplicationsTable = ({ applicationPromise }) => {
    const applicationData = use(applicationPromise);
    const isApplication = Boolean(applicationData.length);
    // console.log(isApplication)

    return (
        <div className="overflow-x-auto mt-10">
            {
                isApplication ?
                    <table className="table ">
                        <tbody>
                            <tr className='font-bold'>
                                <th>
                                    #
                                </th>
                                <td>Name</td>
                                <td>Job</td>
                                <td>Favorite Color</td>
                                <td></td>
                            </tr>
                            {
                                applicationData.map((application, index) => <MyApplicationTableRow
                                    key={application._id}
                                    index={index}
                                    application={application} />

                                )
                            }


                        </tbody>
                    </table>
                    :
                    <div className="">
                        <h2 className="text-2xl font-bold text-center">You Haven't applied For any job yet.</h2>
                        <Link
                            to='/'
                            className='btn'>
                            Apply for a job
                        </Link>
                    </div>
            }

        </div>
    );
};

export default MyApplicationsTable;