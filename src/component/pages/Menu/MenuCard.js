import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({menu}) => {
    const {_id, name, img, des, price, ratings} = menu;
    const description = des.slice(0,50)+'...';
    return (
        <div className="card shadow">
            <img className="card-img-top " style={{height: "15rem"}} src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p><b>{price}</b></p>
                    <p className="card-text">{description}</p>
                    <Link to={`/menuDetails/${_id}`}>
                    <button className='btn btn-dark'>Details</button>
                    </Link>
                </div>
        </div>
    );
};

export default MenuCard;