import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {

    const {signIn, googleLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () =>{
        googleLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            // setError('')
            form.reset();
            // navigate(from, { replace:true})
        })
        .catch(e => {
            // setError(e.message)
        })
}

    return (
        <div className='p-5 login-container'>
            <h2 className='text-center'>Please Login</h2>
            
            <form onSubmit={handleLogin} className=' w-50 sm-w-100 m-auto p-3'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter your email' />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className='form-control' placeholder='password' required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-dark text-white m-auto d-block w-50">Login</button>
                <br />
                {/* <p className='text-danger text-center'>{error}</p> */}

                <br />
                <p>Don't have an account?...Please <Link to="/register">Sign Up</Link></p>


                <div className=' m-auto md-p-5' >
                    <p className='text-center'><b>Or</b></p>
                    <div onClick={handleGoogleLogin}  className='google-login bg-white py-3 d-flex align-items-center  justify-content-center border  m-3'>
                        <i className=" me-3 fs-1 fa-brands fa-google"></i>
                        <h6>Login with Google</h6>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;