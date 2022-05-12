import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const BannerAppointment = ({date , setDate}) => {
    
    return (
        <div>
            <div className="hero min-h-screen bg-cover bg-bannerImg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="" className="max-w-sm md:max-w-md lg:max-w-screen-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        showOutsideDays
                        fixedWeeks
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerAppointment;