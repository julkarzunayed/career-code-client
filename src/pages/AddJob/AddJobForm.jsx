import React from 'react';
import './AddJob.css'
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const AddJobForm = () => {
    const { user } = useAuth()

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const {min, max, currency, ...newJob} = data;

        //currency Process
        newJob.salaryRange = {min, max, currency};

        //Process Requirements
        newJob.requirements = newJob.requirements.split(',').map(req => req.trim());
        
        //Process responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(req => req.trim());

        //Status
        newJob.status = 'active'

        console.log(newJob);
        axios.post(`http://localhost:3000/jobs`, newJob)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    alert("Your Job Added successFully");
                }
            })
    }

    return (
        <div className='flex justify-center'>
            <form
                onSubmit={handleFormSubmit}
                className=' max-w-sm w-full'>
                {/* Basic Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input
                        type="text"
                        name='title'
                        className="input"
                        placeholder="Job title" />

                    <label className="label">Company</label>
                    <input
                        type="text"
                        name='company'
                        className="input"
                        placeholder="Company Name" />

                    <label className="label">Location</label>
                    <input
                        type="text"
                        name='location'
                        className="input"
                        placeholder="Job Location" />

                    <label className="label">Company Logo</label>
                    <input
                        type="url"
                        className="input"
                        name='company_logo'
                        placeholder="Company Logo" />

                </fieldset>

                {/* Job Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Info</legend>

                    <label className="label">Category</label>
                    <select name='category' defaultValue="Select a Category" className="select">
                        <option disabled={true}>Select a Category</option>
                        <option>Engineering</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                        <option>Development</option>
                    </select>

                </fieldset>

                {/* Job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />

                        <input className="btn" type="radio" name="jobType" value='On-Site' aria-label="On-Site" />

                        <input className="btn" type="radio" name="jobType" value='Remote' aria-label="Remote" />

                        <input className="btn" type="radio" name="jobType" value='Hybrid' aria-label="Hybrid" />
                    </div>
                </fieldset>

                {/* Application deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Deadline</legend>

                    <input name='applicationDeadline' type="date" className="input" />

                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className="grid gap-1 grid-cols-1 md:grid-cols-3">
                        <div className="">
                            <label className="label">Salary Min</label>
                            <input
                                type="number"
                                name='min'
                                className="input"
                                placeholder="Salary Min" />
                        </div>

                        <div className="">
                            <label className="label">Salary Max</label>
                            <input
                                type="number"
                                name='max'
                                className="input"
                                placeholder="Salary Max" />
                        </div>

                        <div className="">
                            <label className="label">Category</label>
                            <select name='currency' defaultValue="Select a Currency" className="select">
                                <option disabled={true}>Select a Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                                <option>CNY</option>
                            </select>
                        </div>
                    </div>


                </fieldset>
                {/* Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Requirements</legend>

                    <textarea
                        className="textarea"
                        name='requirements'
                        placeholder="Requirements (separate by comma)"></textarea>


                </fieldset>
                {/* Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Responsibilities</legend>

                    <textarea
                        className="textarea"
                        name='responsibilities'
                        placeholder="Responsibilities (Separate by comma)"></textarea>


                </fieldset>
                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Description</legend>

                    <textarea
                        className="textarea"
                        name='description'
                        placeholder="Description"></textarea>


                </fieldset>
                {/* HR Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">HR Info</legend>
                    <label className="label">HR Name</label>
                    <input
                        type="text"
                        name='hr_name'
                        className="input"
                        placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input
                        type="email"
                        name='hr_email'
                        className="input"
                        defaultValue={user?.email}
                        placeholder="HR Email" />

                </fieldset>

                <input className='btn w-full my-2' type="submit" value="Add job" />
            </form>
        </div>
    );
};

export default AddJobForm;