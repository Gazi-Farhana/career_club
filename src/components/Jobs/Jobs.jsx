import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = ({ job }) => {
    const { name, title, logo_url, id, location, salary, category,duration } = job

    return (
        <div className='py-10 px-8 border rounded-md'>
            <img src={logo_url} className='w-32' alt="company_logo" />
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p>{name}</p>
            <div className='my-6'>
                <button className='btn btn-sm btn-primary btn-outline mr-4'>{category}</button>
                <button className='btn btn-sm btn-primary btn-outline'>{duration}</button>
            </div>
            <div className='flex gap-6'>
                <p>
                    <img className='inline' src="assets/icons/location.png" alt="" /> {location}</p>
                <p>
                    <img className='inline' src="assets/icons/Frame.png" alt="" /> Salary:{salary}</p>
            </div>
            <Link to={`/job/${id}`}>
                <button className="btn-purple mt-6">View Details</button>
            </Link>
        </div>
    );
};

export default Jobs;