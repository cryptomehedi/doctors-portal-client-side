
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { TrashIcon } from '@heroicons/react/solid'
import axiosPrivate from '../../Api/axiosPrivate';
import Spinner from '../Shared/Spinner';

const MyAppointment = () => {
    const [loading, setLoading] = useState(true)
    const [appointments, setAppointments] =useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if(user){
            axiosPrivate.get(`http://localhost:4000/booking?patient=${user.email}`)
            .then(data => {
            setAppointments(data.data)
            setLoading(false)
        })
        }
    },[user])

    return (
        <div>
            <h2>My Total Appointment: {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>SN.</th>
                        <th>Treatment Name</th>
                        <th className='text-center md:text-left'>Time</th>
                        <th className='text-center md:text-left'>Date</th>
                        <th>Cancel</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a,i)=>  <tr key={i} className="hover">
                            <th>{i+1}</th>
                            <td>{a.treatment}</td>
                            <td>{a.slot}</td>
                            <td>{a.date}</td>
                            <td><div className='btn bg-transparent hover:bg-gradient-to-r from-secondary to-primary hover:text-white text-red-400 btn-xs border-0 cursor-pointer w-10 rounded-full'><div className='w-5'>{<TrashIcon/>}</div></div></td>

                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {loading && <div className="text-center"><Spinner text='Your Total Appointments are Loading...' /></div>}
        </div>
    );
};

export default MyAppointment;