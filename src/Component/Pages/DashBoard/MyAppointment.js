import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

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
        </div>
    );
};

export default MyAppointment;