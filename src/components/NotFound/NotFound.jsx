import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center my-24'>
            <h1 className='text-9xl font-extrabold'>Page Not Found</h1>
            <h2 className='my-16 text-4xl font-bold'>404</h2>
            <Link className='bg-purple-500 text-5xl font-bold p-10 rounded-3xl' to='/'>Go back</Link>
        </div>
    );
};

export default NotFound;