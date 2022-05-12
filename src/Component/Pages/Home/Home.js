import React from 'react';
import Banner from './Banner';
import ContactUsHome from './ContactUsHome';
import Feature from './Feature';
import MakeAnAppointment from './MakeAnAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Feature/>
            <MakeAnAppointment/>
            <Testimonials/>
            <ContactUsHome/>
        </div>
    );
};

export default Home;