import React, { useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import BannerAppointment from './BannerAppointment';

const Appointment = () => {
    const [date , setDate] = useState(new Date())
    return (
        <div>
            <BannerAppointment date={date} setDate={setDate}/>
            <AvailableAppointment date={date}/>
        </div>
    );
};

export default Appointment;