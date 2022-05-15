import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { TrashIcon } from '@heroicons/react/solid'

const MyAppointment = () => {
    const [appointments, setAppointments] =useState([])
    const [user] = useAuthState(auth)
    console.log(user.email)
    useEffect(() => {
        if(user){
            axios.get(`http://localhost:4000/booking?patient=${user.email}`)
            .then(data => {
            console.log(data);
            setAppointments(data.data)
        })
        }
    },[user])
    return (
        <div>
            <h2>MyAppointment: {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>SN.</th>
                        <th>Treatment Name</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Cancel</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a,i)=>  <tr class="hover">
                            <th>{i+1}</th>
                            <td>{a.treatment}</td>
                            <td>{a.slot}</td>
                            <td>{a.date}</td>
                            <td> <div className=' text-red-400 w-8 h-8 bg-accent cursor-pointer flex justify-center items-center rounded-full'><div className='w-5'>{<TrashIcon/>}</div></div></td>

                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;