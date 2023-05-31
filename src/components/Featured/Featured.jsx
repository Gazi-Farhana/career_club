import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';

const Featured = () => {
    
    const [jobs, setJobs] = useState([]);
    const [viewMore, setViewMore] = useState(4);

    useEffect(() => {
        fetch('/detail_data.json')
        .then(res => res.json())
        .then(data => setJobs(data.slice(0,viewMore)))
    },[viewMore])


    return (
        <div className='lg:my-10 m-4 lg:m-0'>
           <div className='text-center'>
            <h2 className='text-2xl lg:text-5xl font-bold'>Featured Jobs</h2>
            <p className='text-xl my-6'>Get access to top companies from all over the worlds in one just one click. Vacant positions and details about them are available.</p>
           </div>
           <div className='lg:grid grid-cols-2 gap-6 lg:m-0 m-4'>
            {
                jobs.map(job=> <Jobs
                key={job.id}
                job={job}
                ></Jobs>)
            }
           </div>
           <div className='my-8 text-center'>
            {
                viewMore < 12 ?
                <button className='btn-purple' onClick={()=>setViewMore(12)}>See All Jobs</button>
                : ""
            }
           </div>
        </div>
    );
};

export default Featured;