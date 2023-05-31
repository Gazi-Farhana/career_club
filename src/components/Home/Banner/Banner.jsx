import React from 'react';

const Banner = () => {
  return (
    <div className='banner lg:grid grid-cols-2 items-center mb-16 m-4 lg:m-0 bg-purple-50'>
      <div className='banner-body lg:pl-8 pl-0'>
        <div>
          <h1 className='text-3xl lg:text-7xl font-bold'>Let's Get Your <span className='text-purple-400'>Dream Job</span></h1>
          <p className='text-xl my-6'>We provide thousands of job opportunities in reputated companies worldwide based on location, variety of job sectors based on skills and both part-time and full-time jobs with details information on our website. Lets take you one step closer to your dream job and help you build your career.
          </p>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-purple-400 border-none">Get Started</button>
        </div>
      </div>
      <div>
          <img src="assets/images/user.png" alt="user" />
      </div>
    </div>
  );
};

export default Banner;