import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile">
            <input id="DB-sideBar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className='flex justify-between'>
                    <h2 className="text-3xl font-semibold text-purple-500">Welcome to your DashBoard</h2>
                    <label htmlFor="DB-sideBar" tabIndex="1" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                {/* <!-- Page content here --> */}
                <Outlet/>
                

            </div> 
            <div className="drawer-side">
                <label htmlFor="DB-sideBar" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        admin && <li><CustomLink to='/dashboard/allUsers'>All Users</CustomLink></li>
                    }
                    <li><CustomLink to='/dashboard'>Appointment</CustomLink></li>
                    <li><CustomLink to='/dashboard/review'>Reviews</CustomLink></li>
                    {
                        user.email ==='classicalmehedi@gmail.com' && admin && <>
                            <li><CustomLink to='/dashboard/deleteUsers'>Delete Users</CustomLink></li>
                            <li><CustomLink to='/dashboard/add-doctor'> Add Doctor</CustomLink></li>
                            <li><CustomLink to='/dashboard/manege-doctor'> Manege Doctor</CustomLink></li>
                        </>
                    }
                </ul>
            
            </div>
        </div>
    );
};

export default DashBoard;