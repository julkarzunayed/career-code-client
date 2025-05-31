import React from 'react';
import './JobDetails.css'
import { GrStatusGood, GrStatusGoodSmall } from 'react-icons/gr';
import { LiaIndustrySolid } from 'react-icons/lia';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlineAdminPanelSettings, MdWork } from 'react-icons/md';
import { TbPoint, TbReportMoney } from 'react-icons/tb';
import { VscWatch } from 'react-icons/vsc';
import { Link, useLoaderData } from 'react-router';
import { FiMail } from 'react-icons/fi';
import { BsPatchCheckFill } from 'react-icons/bs';

const JobDetails = () => {
    const {
        _id,
        category,
        company,
        company_logo,
        applicationDeadline,
        description,
        hr_email,
        hr_name,
        jobType,
        location,
        requirements,
        responsibilities,
        salaryRange,
        status,
        title
    } = useLoaderData();
    // console.log(job);
    return (
        <div className='p-5 border border-blue-300 rounded-xl'>
            <div className="flex justify-between">
                <div className="">
                    <h2 className="text-3xl font-bold ">{title}</h2>
                    <p className="text-sm font-medium text-stone-500 flex items-center mt-1">{location}</p>
                </div>
                <Link to={`/jobApply/${_id}`}>
                    <button className='btn bg-blue-500 text-white flex items-center'><BsPatchCheckFill /> Apply nw</button>
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <figure>
                    <img src={company_logo} alt="Company Logo" />
                </figure>
                <h3 className="text-3xl font-bold">{company}</h3>
            </div>
            <div className="overflow-x-auto border border-blue-300 p-3 rounded-xl">
                <h2 className='text-xl font-bold '>Overview</h2>
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr className=''>
                            <th ><LiaIndustrySolid />Industry</th>
                            <td>{category}</td>
                            <th><GrStatusGood />Status</th>
                            <td>{status}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th><TbReportMoney />Salary</th>
                            <td>{salaryRange.min}-{salaryRange.max} {salaryRange.currency.toUpperCase()}</td>
                            <th><VscWatch />Deadline</th>
                            <td>{applicationDeadline}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th><MdWork />Job type</th>
                            <td>{jobType}</td>
                            <th><LuMapPin />Location</th>
                            <td>{location}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-5">
                <h4 className="font-bold text-lg underline ">About The job</h4>
                <p className="">{description}</p>
            </div>
            <div className="mt-5 px-5">
                <h2 className='text-xl font-bold mb-2'>Requirements</h2>
                {
                    requirements.map((requirement, i) => <div
                        key={i}
                        className="flex ic gap-2"> <GrStatusGoodSmall /> {requirement}</div>)
                }
            </div>
            <hr className='my-5 border-t border-blue-300' />
            <div className="mt-5 px-5">
                <h2 className='text-xl font-bold mb-2'>Requirements</h2>
                {
                    responsibilities.map((requirement, i) => <div
                        key={i}
                        className="flex ic gap-2"> <TbPoint size={30} /> {requirement}</div>)
                }
            </div>
            <hr className='my-5 border-t border-blue-300' />
            <div className="mb-4 ">
                <p className="font-bold text-lg underline">Contact Authority:</p>
                <p className="">
                    <span className="font-medium"><MdOutlineAdminPanelSettings /> HR Name: </span>
                    {hr_name}
                </p>
                <p className="flex gap-2">
                    <span className="font-medium flex items-center gap-2"><FiMail /> HR Email: </span> {hr_email}
                </p>
            </div>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn bg-blue-500 text-white flex items-center'><BsPatchCheckFill /> Apply nw</button>
            </Link>
        </div>
    );
};

export default JobDetails;