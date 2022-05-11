import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import MakeAnAppointment from './MakeAnAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Feature/>
            <MakeAnAppointment/>
        </div>
    );
};

export default Home;