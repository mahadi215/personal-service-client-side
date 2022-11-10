import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    // const {email} = user;
    // console.log(email);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[])
    console.log(myReviews);
    return (
        <div className='m-5'>
            
               {
                 myReviews.length === 0?
                    <h3 className='text-center'>You don't have any review</h3>
                     : <h3 className='text-center'>You have {myReviews.length} review</h3>
               }
               {
                myReviews.map(myReview => <div className='m-4 bg-light p-3'>
                    <p><b>{myReview.itemName}</b></p>
                    <p>{myReview.comment}</p>
                    <button className='btn btn-dark'>Edit</button>
                    <button className='btn btn-dark ms-3'>Delete</button>

                </div>)
               }
            
            
        </div>
    );
};

export default MyReviews;