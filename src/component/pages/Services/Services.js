import React, { useEffect, useState } from 'react';
import MenuCard from '../Menu/MenuCard';

const Services = () => {
    
    const [menu, setMenu] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])


    return (
        <div className='container mt-4'>
            <div className='row'>
                {
                    menu.map(m => <div className='col-lg-4 col-md-6 col-sm-12 g-4 ' >
                        <MenuCard key={m._id} menu={m}>

                        </MenuCard>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;