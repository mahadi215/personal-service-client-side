import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const data = useLoaderData()
    console.log(data);

    return (
        <div className='m-5'>
            <h3>{data.itemName}</h3>
        </div>
    );
};

export default Update;