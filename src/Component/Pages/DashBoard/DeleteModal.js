import React from 'react';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';

const DeleteModal = ({deletingDoc,setDeletingDoc,refetch}) => {
    const {email,img,name, specialty} = deletingDoc

    const handleDelete = async email => {
        await axiosPrivate.delete(`http://localhost:4000/doctor/${email}`)
        .then(data => {
            if(data.data.deletedCount){
                toast.success('A Doctor Deleted Successfully')
                refetch()
                setDeletingDoc(null)
            }else{
                toast.error('A Doctor Deleted Successfully')
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="delete-Confirm-Modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-red-400">Are You Sure You Want to Delete <span className='text-red-500'>{name}</span> !</h3>
                <div className='flex justify-center mt-5'><img className='rounded-full w-20 h-20' src={img} alt="" /></div>
                <div className='text-center text-xl'>
                    <p className='text-xl'>Email: {email}</p>
                    <p>Specialty: {specialty}</p>
                </div>
                <div className="modal-action">
                <button onClick={()=>handleDelete(email)} className="btn btn-xs bg-red-300 hover:bg-red-500 border-0 text-white">Confirm</button>
                <label htmlFor="delete-Confirm-Modal" className="btn btn-xs">Cancel</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteModal;