import React from 'react';
import axiosPrivate from '../../Api/axiosPrivate';
import { toast } from 'react-toastify';

const UserRow = ({user , refetch, index}) => {
    // const {index} = index;
    const {email, role} = user;

    const makeAdmin = () => {
        axiosPrivate.put(`http://localhost:4000/user/admin/${email}`)
        .then(data => {
            console.log(data?.data?.result?.modifiedCount);
            if(data?.data?.result?.modifiedCount){
                refetch()
                toast.success(`Congratulations ${email} . Now you are an admin`)
            }
            // else{
            //     toast.error('Failed to make an admin')
            // }
        })
    }

    return (
        <tr className="hover">
            <th>{index+1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> }</td>
            <td><button className="btn btn-xs">Remove user</button></td>
        </tr>
    );
};

export default UserRow;