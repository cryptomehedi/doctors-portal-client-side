import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name, slots} = service;
    return (
        <div>
            <div className="card w-full text-center bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-secondary justify-center">{name}</h2>
                    <p>
                        {
                            slots.length > 0 ? 
                            <span className='text-sm'>{slots[0]}</span>
                            :
                            <span className='text-red-500 text-sm'>No service available</span>
                        }
                    </p>
                    <div className="card-actions justify-center">
                        <label onClick={() =>setTreatment(service)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-secondary text-white font-medium uppercase modal-button">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;