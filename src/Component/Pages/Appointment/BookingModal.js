import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const BookingModal = ({date, treatment, setTreatment}) => {
    const [user] = useAuthState(auth)
    const {name, slots} = treatment;

    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value
        console.log(slot)
        setTreatment(null)
    }
    console.log(user)
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
                                slots.map((slot , i) => <option key={i} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled defaultValue={user?.displayName || ''} name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled defaultValue={user?.email || ''} placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;