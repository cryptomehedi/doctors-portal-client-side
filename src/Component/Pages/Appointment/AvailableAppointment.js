import axios from 'axios';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query'
import Spinner from '../Shared/Spinner';

const AvailableAppointment = ({date, holyday}) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    
    const formattedDate = format(date, 'PPP')

    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], ()=>axios.get(`https://doctorsportal-api.herokuapp.com/available?date=${formattedDate}`))
    
    // {
    //     // fetch(`https://doctorsportal-api.herokuapp.com/available?date=${formattedDate}`)
    //     // .then(res=>res.json())
        
        // console.log(services?.data);
    // })
    // let {data} = services
    if(isLoading){
        return <div className=" flex justify-center items-center"><Spinner text='Our Services Is Loading...' /></div>
    }
    // useEffect(() => {
    //     const formattedDate = format(date, 'PPP')
    //     axios.get(`https://doctorsportal-api.herokuapp.com/available?date=${formattedDate}`)
    //     .then(data => {
    //         setServices(data.data)
    //     })
    // },[date])
    return (
        <div className='my-20'>
            <h2 className='mb-20 text-xl text-center'>{holyday ? <span className="text-red-500 font-semibold">Today Is Public Holyday.  Please Choose Another Day For Your Available Appointment</span> : <span className='text-secondary'>Available Appointments on {format(date, 'PPP')}</span>}</h2>
            {
                !holyday ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.data?.map(service => <Service service={service} setTreatment={setTreatment} key={service._id} />)
                }
            </div> : ''
            }
            {treatment && <BookingModal refetch={refetch} date={date} setTreatment={setTreatment} treatment={treatment}/>}
        </div>
    );
};

export default AvailableAppointment;