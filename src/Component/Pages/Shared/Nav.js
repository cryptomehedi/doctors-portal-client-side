import React  from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Nav = () => {
    const [user] = useAuthState(auth)
    const menuItems =   <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/appointment">Appointment</Link></li>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            {
                                user ? 
                                <>
                                    <li><Link to="/dashboard">DashBoard</Link></li>
                                    <li><button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold" onClick={()=> {signOut(auth); localStorage.removeItem('accessToken')}}>Sign Out</button></li>
                                </>
                                :<li><Link to="/login">Login</Link></li>
                            }
                        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar lg:navbar-start flex justify-between">
                    <div>
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost normal-case text-xl">Doctor's Portal</Link>
                    </div>
                    <label htmlFor="DB-sideBar" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;