import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='container-fluid m-auto my-5 p-4 contact-container'>
            <div>
                <h3 className='text-center'>Say Hello</h3>
            <form  className=' w-75 sm-w-100 m-auto p-3'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter your name' required />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter your email' required />

                </div>
                <div className="mb-3">
                    <label  className="form-label">Messege</label>
                    <input style={{height: "8rem"}} type="text" name='messege' className='form-control' placeholder='Messege' required />

                </div>
                
                <button type="submit" className="btn btn-dark m-auto d-block w-50">Submit</button>
                <br />
            </form>
            </div>
            
        </div>
    );
};

export default Contact;