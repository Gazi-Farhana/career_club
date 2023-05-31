import React, { useEffect, useState } from 'react';
import DetailCategory from './DetailCategory';

const Category = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/category.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='lg:my-8 m-4 lg:m-0'>
            <div className='text-center'>
                <h2 className='text-2xl lg:text-5xl font-bold'>Job Category List</h2>
                <p className='text-xl my-6'>More than thousands of jobs on different categories with detail information are available everyday. </p>
            </div>
            <div className='lg:flex justify-between'>
                

                {
                categories.map(category => <DetailCategory
                key={category.id}
                category={category}
                ></DetailCategory>)
                }
            </div>
        </div>
    );
};

export default Category;