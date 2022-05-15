import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="DB-sideBar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className="text-3xl font-semibold text-purple-500">Welcome to your DashBoard</h2>
                {/* <!-- Page content here --> */}
                <Outlet/>
                

            </div> 
            <div className="drawer-side">
                <label htmlFor="DB-sideBar" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>Appointment</Link></li>
                    <li><Link to='/dashboard/review'>Reviews</Link></li>
                </ul>
            
            </div>
        </div>
    );
};

export default DashBoard;