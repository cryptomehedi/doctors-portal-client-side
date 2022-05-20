import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../Api/axiosPrivate';
import Spinner from '../Shared/Spinner';
import DeleteModal from './DeleteModal';


const ManegeDoctor = () => {
    const [deletingDoc, setDeletingDoc] = useState(null)
    const {data: doctors, isLoading, refetch} = useQuery('doctor', ()=> axiosPrivate.get('http://localhost:4000/doctor'))
    if(isLoading){
        return <Spinner/>
    }

    return (
        <div>
            <h2 className='text-2xl'>Manege Doctor</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>specialty</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- row 1 --> */}
                    <>
                        {
                            doctors?.data?.map((d,i) => <tr key={d._id} className="hover">
                                <th>{i+1}.</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={d.img} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <th>{d.name}</th>
                                <td>{d.email}</td>
                                <th>{d.specialty}</th>
                                <td>
                                <label onClick={()=>setDeletingDoc(d)} htmlFor="delete-Confirm-Modal" className="btn btn-xs">Remove</label>
                                    </td>
                            </tr>)
                        }          
                    </>
                    
                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                    <tr>
                        <th>SL.</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>specialty</th>
                        <th>Remove</th>
                    </tr>
                    </tfoot>
                    
                </table>
            </div>
            
            {
                deletingDoc && <DeleteModal refetch={refetch} deletingDoc={deletingDoc} setDeletingDoc={setDeletingDoc} />
            }
        </div>
    );
};

export default ManegeDoctor;