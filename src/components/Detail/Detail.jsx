import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToLocalStorage } from '../../localStorage/localStorageSave';
import CommonBanner from '../CommonBanner/CommonBanner';

const Detail = () => {
    const { id } = useParams();
    const [singleJob, setSingleJob] = useState({});
    const [oldJobs, setOldJobs] = useState([]);
    const { title, salary, location, description, responsibilities, education, experience, phone, email } = singleJob


    useEffect(() => {
        fetch('/detail_data.json')
            .then(res => res.json())
            .then(data => {
                const foundJob = data.find(dt => id == dt.id)
                setSingleJob(foundJob)
            })
    }, [id])

    const handleApplyNow = (selectedJob) => {
        let jobContainer = []
        const previoustJob = oldJobs.find(job => id == job.id)
        if(!previoustJob){
            selectedJob.applied = 1;
            jobContainer = [...oldJobs, selectedJob]
            alert("Job applied")
        }
        else{
            return alert("Already applied")
        }

        setOldJobs(jobContainer)
        addToLocalStorage(selectedJob.id)
        
    }

    return (
        <div>
            <CommonBanner
                data={"Detail Job"}
            ></CommonBanner>
            <div className='lg:grid grid-cols-2fr gap-6 my-12'>
            <div>
                <p className='my-4'><span className='font-bold'>Job Description:</span>  {description}</p>
                <p><span className='font-bold'>Job Responsibility:</span>  {responsibilities} </p>
                <p className='my-4'><span className='font-bold'>Educational Requirements:</span></p>
                <p>{education}</p>
                <p className='my-4'><span className='font-bold'>Experiences:</span></p>
                <p className='my-4'>{experience}</p>
            </div>

            <div className='justify-self-end bg-purple-50 p-8'>
                <h3 className='font-bold text-xl border-b-2'>Job Details:</h3>
                <div className='my-4'>
                    <img src="" alt="" />
                    <p><span className='font-semibold'>Salary:</span> {salary}</p>
                </div>
                <div className='my-4'>
                    <img src="" alt="" />
                    <p><span className='font-semibold'>Job Title:</span> {title}</p>
                </div>

                <h3 className='mt-8 font-bold text-xl border-b-2'>Contact Information:</h3>
                <div className='my-4'>
                    <img src="" alt="" />
                    <p><span className='font-semibold'>Phone:</span> {phone}</p>
                </div>
                <div className='my-4'>
                    <img src="" alt="" />
                    <p><span className='font-semibold'>Email</span>: {email}</p>
                </div>
                <div className='my-4'>
                    <img src="" alt="" />
                    <p><span className='font-semibold'>Address:</span> {location}</p>
                </div>
                <div>
                    <button onClick={()=>handleApplyNow(singleJob)} className='btn-purple'>Apply Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Detail;