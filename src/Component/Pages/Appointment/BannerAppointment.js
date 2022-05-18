import React, { useEffect } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const BannerAppointment = ({date , setDate , fridays , setFridays}) => {
    const currentDay = parseInt(new Date().getDate())
    const currentMonth = parseInt(new Date().getMonth())
    const currentYear = parseInt(new Date().getFullYear())

    
    useEffect(()=>{
        function fridaysInMonth() {
            let days = new Date( currentYear,currentMonth,0 ).getDate();
            let fridays = [ 4 - (new Date( currentMonth +'/01/'+ currentYear ).getDay()) ];
            for ( let i = fridays[0] + 7; i < days; i += 7 ) {
                fridays.push( i );
            }
            return fridays;
        }
        let disabledDays =[]
        fridaysInMonth().map(d => disabledDays.push(new Date(currentYear, currentMonth, d)))
        setFridays(disabledDays)
    },[date , currentMonth, currentYear, setFridays])
    return (
        <div>
            <div className="hero lg:min-h-screen bg-cover bg-bannerImg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="" className="max-w-sm md:max-w-md lg:max-w-screen-sm rounded-lg shadow-2xl" />
                    <div className='shadow-2xl mt-10 lg:mt-0 lg:mr-16 rounded-2xl shadow-gray-400'>
                        <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={fridays}
                        showOutsideDays
                        defaultMonth={new Date(currentYear, currentMonth)} fromDate={new Date(currentYear, currentMonth, currentDay)} toDate={new Date(currentYear, currentMonth, currentDay +6)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerAppointment;