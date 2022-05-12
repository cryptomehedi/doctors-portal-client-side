import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        axios.get('services.json')
        .then(data => {
            setServices(data.data)
        })
    },[])

    return (
        <div className='my-20'>
            <h2 className='mb-20 text-xl text-center text-secondary'>Available Appointments on {format(date, 'PPP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service service={service} setTreatment={setTreatment} key={service._id} />)
                }
            </div>
            {treatment && <BookingModal treatment={treatment}/>}
        </div>
    );
};

export default AvailableAppointment;