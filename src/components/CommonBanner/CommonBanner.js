import React from 'react';

const CommonBanner = ({data}) => {
    return (
        <div className=' bg-purple-50 lg:flex justify-between'>
            <img className='self-end' src="assets/images/Vector.png" alt="" />
            <h2 className='self-center text-center text-5xl font-semibold my-6'>{data}</h2>
            <img className='self-start' src="assets/images/Vector-1.png" alt="" />
        </div>
    );
};

export default CommonBanner;