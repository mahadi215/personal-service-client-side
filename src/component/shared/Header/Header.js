import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {

    const { logOut, user } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow  p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>NEHA's_CAKE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/menu'>Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/blog'>Blog</Link>
                            </li>

                            {
                                user?.email?
                                    <>
                                    
                                        <li className="nav-item ">
                                        <Link className="nav-link" to='/addservice'>Add Service</Link>
                                        </li>
                                        <li className="nav-item ">
                                         <Link className="nav-link" to='/myreviews'>My Reviews</Link>
                                        </li>
                                        <li className="nav-item ms-3 mt-2">
                                         <i className="fa-solid fa-user"></i>
                                        </li>
                                        <li className="nav-item ms-1">
                                            <button onClick={handleLogOut} className='btn nav-link'>Log Out</button>
                                        </li></>
                                    : <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Login</Link>
                                </li>
                           }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;