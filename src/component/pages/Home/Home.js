import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-block">
                                <h3>Wellcome to NEHA'S Home Made CAKE </h3>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://images.unsplash.com/photo-1518047601542-79f18c655718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-block">
                                <h3>COTTON CANDY DREAMS</h3>
                                
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1548865163-afb128596c1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-block">
                                <h3>EARL GREY CHIFFON</h3>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <HomeCard></HomeCard>
        </div>
    );
};

export default Home;