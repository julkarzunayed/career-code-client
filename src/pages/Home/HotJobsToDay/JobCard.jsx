import React from 'react';
import { LuMapPin } from "react-icons/lu";
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const {
        title,
        company_logo,
        description,
        category,
        requirements,
        company,
        location,
        _id,
        salaryRange
    } = job;

    return (
        <div className='border  bg-blue-50 border-gray-300 hover:bg-white hover:translate-1 rounded-xl px-3 py-4 flex flex-col gap-3 justify-between'>
            <div className="flex">
                <div className="w-16">
                    <img src={company_logo} alt="" />
                </div>
                <div className="">
                    <h3 className='text-2xl font-bold'>{company}</h3>
                    <p className="flex items-center gap-1 text-gray-500 text-sm"><LuMapPin /> {location}</p>
                </div>
            </div>
            <h4 className="text-2xl font-bold">{title}</h4>
            <p className="">{description}</p>
            <div className="flex flex-wrap gap-1 text-sm ">
                {
                    requirements.map((requirement, i) => <div
                        key={i}
                        className='bg-blue-100 py-1 rounded-sm px-3'>{requirement}</div>)
                }
            </div>
            <div className="text-lg font-bold text-blue-500">
                Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
            </div>
            <div className="card-actions justify-end">
                <Link to={`/jobsDetails/${_id}`}>
                    <button className="btn  bg-blue-100 hover:bg-blue-500 hover:text-white">
                        Apply Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;