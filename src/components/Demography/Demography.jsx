import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CommonBanner from '../CommonBanner/CommonBanner';

const Demography = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/personal_marks_data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    const getIntroOfPage = (label) => {
        if (label === "Assingment 1") {
            return "Achieved Mark: 60";
        }
        if (label === "Assingment 2") {
            return "Achieved Mark: 60";
        }
        if (label === "Assingment 3") {
            return "Achieved Mark: 60";
        }
        if (label === "Assingment 4") {
            return "Achieved Mark: 60";
        }
        if (label === "Assingment 5") {
            return "Achieved Mark: 60";
        }
        if (label === "Assingment 6") {
            return "Achieved Mark: 60";
        }
        if (label === "Assingment 7") {
            return "Achieved Mark: 57";
        }
        if (label === "Assingment 8") {
            return "Achieved Mark: 58";
        }
        return "";
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value}`}</p>
                    <p className="intro">{getIntroOfPage(label)}</p>
                    <p className="desc">Total Mark: 60</p>
                </div>
            );
        }

        return null;
    };


    return (

        <div>
            <CommonBanner
                data={"Statistical Analysis of Your Profile"}
            ></CommonBanner>
            <div className='mb-32 py-10' style={{ width: "100%", height: 400 }}>

                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Demography;