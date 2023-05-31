import React, { useEffect, useState } from 'react';
import { getStoredCard } from '../../localStorage/localStorageSave';
import FilterData from '../FilterData/FilterData';
import CommonBanner from '../CommonBanner/CommonBanner';

const Applied = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [sorter, setSorter] = useState("");

    useEffect(() => {
        fetch('/detail_data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        const storedData = getStoredCard();

        const savedStoredJob = [];
        for (const id in storedData) {
            const addedJob = data.find(dt => dt.id == id)
            if (addedJob) {
                const applied = storedData[id]
                addedJob.applied = applied;
                savedStoredJob.push(addedJob)
            }
        }
        if (sorter == "remote") {
            const remote = savedStoredJob.filter(saveData => saveData.remote)
            setFilterData(remote)
        }
        else if (sorter == "onsite") {
            const onsite = savedStoredJob.filter(saveData => saveData.onsite)
            setFilterData(onsite)
        } else {
            setFilterData(savedStoredJob)
        }

    }, [data, sorter])

    return (
        <div>
            <CommonBanner
            data={"Applied Jobs"}
            ></CommonBanner>
            <div className="my-8 flex justify-end">
                <select
                    onChange={(event) => setSorter(event.target.value)}
                    className="select select-bordered"
                >
                    <option disabled selected>
                        Sort by
                    </option>
                    <option value="all">Default</option>
                    <option value="onsite">Onsite</option>
                    <option value="remote">Remote</option>
                </select>
            </div>
            <div className='my-10'>
            {
                filterData.map(fd => <FilterData
                key={fd.id}
                fd={fd}
                ></FilterData>)
            }
            </div>
        </div >
    );
};

export default Applied;