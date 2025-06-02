import React from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const ApplyNow = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    

    const handleJobApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;
        

        const application = {
            jobId : id,
            applicant: user.email,
            linkedIn,
            gitHub,
            resume,
        };
        // console.log(application);

        axios.post(`http://localhost:3000/applications`, application)
            .then(data => {
                // console.log(data.data);
                if(data.data.insertedId){
                    alert('Application submitted successfully');
                    navigate('/myApplications')

                }
            }).catch(error => {
                console.log(error);
            })
        

    }
    return (
        <div className='flex flex-col items-center my-10'>
            <h1 className="text-3xl font-bold">Apply now</h1>
            <p className="mt-3">See   
                 <Link className='underline text-blue-500' to={`/jobsDetails/${id}`}>
                 Details </Link>  
                 about the Job
            </p>
            <form
                onSubmit={handleJobApply}
                className='mt-8'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">LinkedIn Profile Link</label>
                    <input 
                    type="url" 
                    name='linkedIn'
                    required
                    className="input" 
                    placeholder="My awesome page" />

                    <label className="label">GitHub Profile Link</label>
                    <input 
                    type="url" 
                    name='gitHub'
                    required
                    className="input" 
                    placeholder="my-awesome-page" />

                    <label className="label">Resume Link</label>
                    <input 
                    type="url" 
                    name='resume'
                    required
                    className="input" 
                    placeholder="Name" />

                    <input type="submit" className='btn text-gray-600' value='Apply for Job' />
                </fieldset>

            </form>
        </div>
    );
};

export default ApplyNow;