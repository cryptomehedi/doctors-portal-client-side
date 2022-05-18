import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../Api/axiosPrivate';
import Spinner from '../Shared/Spinner';
import UserRow from './UserRow';

const AllUsers = () => {
    const {data : users, isLoading, refetch} = useQuery('users', ()=> axiosPrivate.get('https://doctorsportal-api.herokuapp.com/user'))
    if(isLoading) {
        return <Spinner/>
    }
    return (
        <div>
            <h2 className='text-3xl'>Total Users {users.data.length}</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>SN</th>
                    <th>Email</th>
                    <th>Add</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.data.map((user,index) => <UserRow key={user._id} refetch={refetch} index={index} user={user} />)
                }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default AllUsers;