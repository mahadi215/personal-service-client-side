import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Register.css'

const Register = () => {

    const {createUser} = useContext(AuthContext);
    
    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value ;
        const photo = form.photo.value ;
        const email = form.email.value ;
        const password = form.password.value ;
        // console.log(name, photo,email,password);
        createUser(email, password,name)
        .then(result =>{
            const user = result.user
            console.log(user);
            form.reset();
        })
        .catch(error => {
            // setError(error.message)
        });
    }

    
    return (
        <div className='p-5 register-container'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister} className=' w-75 sm-w-100 m-auto p-3'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter your name' required />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Photo</label>
                    <input type="text" name='photo' className='form-control' placeholder='Enter your photo url' />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter your email' required />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className='form-control' placeholder='password' required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" />
                    <label className="form-check-label" for="exampleCheck1">Accept terms</label>
                </div>
                <button type="submit" className="btn btn-dark m-auto d-block w-50">Submit</button>
                <br />
                {/* <p className='text-danger text-center'>{error}</p> */}
                <br />
                <p>Already have an account...Please <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Register;