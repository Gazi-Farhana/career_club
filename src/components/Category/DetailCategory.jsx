import React from 'react';

const DetailCategory = ({ category }) => {
    const { vacancies, company_icon, type } = category;


    return (
        <div className="card bg-purple-50 shadow-lg lg:m-0 m-4">
            <div className="card-body">
                <img className='w-20 h-20 p-4 bg-purple-100 rounded-lg' src={company_icon} alt="category" />
                <h3 className="card-title">{type}</h3>
                <p>{vacancies}</p>
            </div>
        </div>
    );
};

export default DetailCategory;