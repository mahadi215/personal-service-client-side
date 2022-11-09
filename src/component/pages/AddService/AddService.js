import React from 'react';

const AddService = () => {
    return (
        <div>
            <div>
                <h3 className='text-center mt-4'>Add Service</h3>
            <form  className=' w-75 sm-w-100 m-auto p-3'>
                <div className="mb-3">
                    <label  className="form-label">Item Name</label>
                    <input type="text" name='ItemName' className='form-control' placeholder='Enter Item Name' required />

                </div>
                <div className="mb-3">
                    <label  className="form-label">Add Image</label>
                    <input type="text" name='imgURL' className='form-control' placeholder='Enter Image url' required />

                </div>
                <div className="mb-3">
                    <label  className="form-label">Price</label>
                    <input type="text" name='price' className='form-control' placeholder='Enter Price' required />

                </div>
                <div className="mb-3">
                    <label  className="form-label">Ratings</label>
                    <input type="text" name='ratings' className='form-control' placeholder='ratings' required />

                </div>
                
                <div className="mb-3">
                    <label  className="form-label">Description</label>
                    <input style={{height: "8rem"}} type="text" name='description' className='form-control' placeholder='description' required />

                </div>
                
                <button type="submit" className="btn btn-dark m-auto d-block w-50">Submit</button>
                <br />
            </form>
            </div>
        </div>
    );
};

export default AddService;