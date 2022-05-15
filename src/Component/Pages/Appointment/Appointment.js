import React, { useEffect, useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import BannerAppointment from './BannerAppointment';

const Appointment = () => {
    const [date , setDate] = useState(new Date())
    const [fridays , setFridays] = useState([])
    const [holyday , setHoliday] = useState(false)
    
    // console.log(fridays);
    useEffect(() => {
        const hDay =fridays.find(friday => friday.toString().slice(0, 15) === date?.toString().slice(0, 15))
        if(hDay){
            setHoliday(true)
        }else{
            setHoliday(false)
        }
    },[date , fridays])

    return (
        <div>
            <BannerAppointment date={date} setDate={setDate} fridays={fridays} setFridays={setFridays}/>
            <AvailableAppointment date={date} holyday={holyday}/>
        </div>
    );
};

export default Appointment;