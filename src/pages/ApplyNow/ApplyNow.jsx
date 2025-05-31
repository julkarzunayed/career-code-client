import React from 'react';
import { Link } from 'react-router';

const ApplyNow = () => {
    return (
        <div className='flex flex-col items-center mt-10'>
            <h1 className="text-3xl font-bold">Apply now</h1>
            <p className="">See
                <Link to={``}> Details </Link>
                about the Job
            </p>
            <form className='mt-8'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">Title</label>
                    <input type="text" className="input" placeholder="My awesome page" />

                    <label className="label">Slug</label>
                    <input type="text" className="input" placeholder="my-awesome-page" />

                    <label className="label">Author</label>
                    <input type="text" className="input" placeholder="Name" />
                </fieldset>
            </form>
        </div>
    );
};

export default ApplyNow;