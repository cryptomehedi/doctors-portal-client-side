import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
const MakeAnAppointment = () => {
    return (
        <section className='flex justify-center rounded-lg bg-cover mt-32 items-center bg-appointment'>
            <div className='hidden lg:block flex-1'>
                <img className='mt-[-100px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white p-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='mt-5 text-3xl'>Make an appointment Today</h2>
                <p className='my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAnAppointment;