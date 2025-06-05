import React from 'react';
import AddJobForm from './AddJobForm';

const AddJob = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Add a job</h1>
            <AddJobForm></AddJobForm>
        </div>
    );
};

export default AddJob;