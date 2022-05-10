import React from 'react';
import bannerImg from '../../../assets/images/chair.png'
import Info from './Info';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-bannerImg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} alt="" className="max-w-sm md:max-w-md lg:max-w-screen-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">Get Started</button>
                    </div>
                </div>
            </div>
            <Info/>
        </div>
    );
};

export default Banner;