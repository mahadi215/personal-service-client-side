import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MenuDetails = () => {
    const {_id, name, img, des, price, ratings} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleReview = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const feedback = form.feedback.value;

        const review = {
            item: _id,
            itemName:name,
            email,
            comment: feedback

        }

    }
    return (
        <div className='m-4'>
            <div className="card w-75 m-auto" >
            <img className="card-img-top " style={{height: "18rem"}} src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p><b>{price}</b></p>
                    <p className="card-text">{des}</p>
                    <p>{ratings}</p>
                    <Link to={`/menuDetails/${_id}`}>
                    <button className='btn btn-dark'>Order</button>
                    </Link>
                </div>
                <form onSubmit={handleReview}  className=' w-50 sm-w-100 m-auto p-3'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" name='name' className='form-control' defaultValue={user?.displayName} readOnly />

                </div>
                <div className="mb-3">
                    <label  className="form-label">Feedback</label>
                    <input type="text" name='feedback' className='form-control' placeholder=' Add Your Feedback' required />
                </div>
                <button type="submit" className="btn btn-dark text-white m-auto d-block w-50">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default MenuDetails;