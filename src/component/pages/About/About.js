import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='container m-auto my-5 abt-container'>
            <div className='row '>
                <div className='col-lg-6 col-sm-12'>
                    <img className=' img-fluid rounded' src="https://c8.alamy.com/zooms/9/7806c188946444b7a4724d35624a97b1/t8xxd3.jpg" alt="" />
                </div>

                <div className='col-lg-6 col-md-12 abt-text d-flex align-items-center'>
                    <div className='m-4'>
                    <h3> Hi, I’m Neha</h3>
                    <p>I’m self-taught baker, obsessed with cake. <br />
                    I long ago ditched box mixes in pursuit of melt-in-your-mouth, to-die-for flavor combinations, fillings and textures. I believe cake must be decadent, life-changing and worthy of celebration! And I believe anyone should be able to bake that kind of cake – and I’m here to teach you just that! <br />

                    </p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default About;