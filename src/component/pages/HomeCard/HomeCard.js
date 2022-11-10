import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeCard = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('https://node-mong-server.vercel.app/menu')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    // console.log(card);
    const homeCards = card.slice(0, 3);
    // console.log(homeCard);
    return (
        <div className='container m-auto my-5'>
            <h2 className='text-center my-5'>Hot Sell</h2>
        <div className='row g-3'>
            {
                homeCards.map(homeCard => <div className='col-lg-4 col-md-6 col-sm-12' key={homeCard._id}>
                    <div className="card shadow ">
                        <img className="card-img-top " style={{ height: "15rem" }} src={homeCard.img} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{homeCard.name}</h5>
                            <p><b>{homeCard.price}</b></p>
                            <p className="card-text">{homeCard.des.slice(0, 50)}</p>
                            <Link to={`/menuDetails/${homeCard._id}`}>
                                <button className='btn btn-dark'>Details</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
            <div className='text-center'><Link className='btn btn-dark my-4 m-auto' to='/menu'> See All</Link></div>
        </div>
    );
};

export default HomeCard;