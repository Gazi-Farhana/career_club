import React from 'react';
import { Link } from 'react-router-dom';

const FilterData = ({ fd }) => {
    const { title, name, category, duration, location, salary, logo_url, id } = fd;
    return (
        <div className='grid grid-cols-applied-job mx-8 border-2 mt-4 rounded-xl px-6 py-4'>
            <div className='mr-4'>
                <img src={logo_url} alt="Company" />
            </div>
            <div>
                <div>
                    <div>
                        <h3 className='font-semibold text-2xl'>{title}</h3>
                        <p className='text-xl'>{name}</p>
                    </div>
                    <div className='flex gap-4 my-4'>
                        <button className="btn btn-sm btn-primary btn-outline">{category}</button>
                        <button className="btn btn-sm btn-primary btn-outline">{duration}</button>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex'>
                            <img src="assets/Icons/Frame-4.png" alt="location" />
                            <p>{location}</p>
                        </div>
                        <div className='flex'>
                            <img src="assets/Icons/Frame.png" alt="salary" />
                            <p>Salary: {salary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/job/${id}`} className='self-center justify-self-end'>
                <button className='btn-purple'>View Details</button>
            </Link>
        </div>
    );
};

export default FilterData;