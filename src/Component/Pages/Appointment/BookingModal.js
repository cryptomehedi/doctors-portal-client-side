import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({date, treatment, setTreatment, refetch}) => {
    const [user] = useAuthState(auth)
    console.log(user);
    const {name, _id,  slots} = treatment;
    const formattedDate = format(date, 'PPP')
    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patientName : user.displayName,
            patientEmail : user.email,
            phone: e.target.phone.value
        }
        axios.post('https://doctorsportal-api.herokuapp.com/booking', booking)
        .then(data => {
            if(data.data.success) {
                toast.success(`Your Appointment is set ${formattedDate} at ${slot} for ${name}`)
            }else{
                toast.error(`You already have an appointment for ${data.data.booking?.treatment}  on ${data.data.booking?.date} at ${data.data.booking?.slot}`)
            }
            refetch()
            setTreatment(null)
        })
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-5 top-5">✕</label>
                    <h3 className="font-bold text-secondary text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className="py-4 grid grid-cols-1 gap-3 justify-items-center">
                        <input name="date" type="text" disabled defaultValue={format(date, 'PPP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot , i) => <option key={i}  value={slot} >{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled defaultValue={user?.displayName || ''} name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled defaultValue={user?.email || ''} placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input required type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;