import React from 'react';

const ContactUsHome = () => {
    return (
        <div className='mt-10 p-10 text-center bg-appointment'>
            <h3 className='text-xl text-primary'>Contact Us</h3>
            <h2 className='mt-4 text-white text-3xl'>Stay connected with us</h2>
            <form className='mt-6'>
                <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" /> <br />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs my-3" /> <br />
                <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Your Message"></textarea> <br />
                <button className=" mt-5 btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">Get Started</button>
            </form>
        </div>
    );
};

export default ContactUsHome;