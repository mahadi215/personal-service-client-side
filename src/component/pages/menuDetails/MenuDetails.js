import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MenuDetails = () => {
    const {_id, name, img, des, price, ratings} = useLoaderData();
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
     
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?item=${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data))

    },[ _id])

    const handleReview = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const customerName = user?.displayName || 'annonymous';
        const feedback = form.feedback.value;
        const photo = user?.photoURL;

        const review = {
            item: _id,
            itemName:name,
            email,
            customerName,
            comment: feedback,
            photo

        }

        fetch('http://localhost:5000/reviews', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data =>{
                if(data.acknowledged){
                    alert('review added successfuly')
                    form.reset();
                }
        })
    }
    return (
        <div className='m-4 row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className="card w-75 m-auto" >
            <img className="card-img-top " style={{height: "18rem"}} src={img} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p><b>{price}</b></p>
                    <p className="card-text">{des}</p>
                    <p>Ratings : {ratings}</p>
                    <Link to={`/menuDetails/${_id}`}>
                    <button className='btn btn-dark'>Add To Cart</button>
                    </Link>
                </div>
                
        </div>
            </div>

        <div className='col-lg-6 col-md-6 col-sm-12'>
        {
            user?.email?
            <form onSubmit={handleReview}  className=' w-50 sm-w-100 m-auto p-3'>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type="text" name='name' className='form-control' defaultValue={user?.email} readOnly />

            </div>
            <div className="mb-3">
                <label  className="form-label">Feedback</label>
                <input type="text" name='feedback' className='form-control' placeholder=' Add Your Feedback' required />
            </div>
            <button type="submit" className="btn btn-dark text-white m-auto d-block w-50">Submit</button>
        </form>
          : <div className='m-2'> <p><b>Please Login to add your feedback </b></p>
            <Link to='/login' className='btn btn-dark'>Login</Link>
          </div>
        }
            <br />
            <div className='m-3'>
            <h5 className='text-center'>This item has {reviews.length} reviews.</h5>
            { 
               reviews.map(review => <div className=' m-2 border p-2' > 
                 <p> 
                    {review.photo?<img style={{height: "20px", width: "20px"}} className='rounded me-2' src={review.photo} alt="" /> :  <i className="fa-solid fa-user me-2"></i>}
                    <b>{review.customerName}</b></p>
                 {/* <p><b>{review.email}</b></p> */}
                 <p>{review.comment}</p>
                 
               </div>)
              
            }

            </div>
        </div>
        </div>
    );
};

export default MenuDetails;