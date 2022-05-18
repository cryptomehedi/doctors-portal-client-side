import React  from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from './CustomLink';

const Nav = () => {
    const [user] = useAuthState(auth)
    const menuItems =   <>
                            <li><CustomLink to="/">Home</CustomLink></li>
                            <li><CustomLink to="/about">About</CustomLink></li>
                            <li><CustomLink to="/appointment">Appointment</CustomLink></li>
                            <li><CustomLink to="/reviews">Reviews</CustomLink></li>
                            <li><CustomLink to="/contact-us">Contact Us</CustomLink></li>
                            {
                                user ? 
                                <>
                                    <li><CustomLink to="/dashboard">DashBoard</CustomLink></li>
                                    <li><button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase font-bold ml-2" onClick={()=> {signOut(auth); localStorage.removeItem('accessToken')}}>Sign Out</button></li>
                                </>
                                :<li><CustomLink to="/login">Login</CustomLink></li>
                            }
                        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar lg:navbar-start">
                    <div>
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <CustomLink to="/" className="btn btn-ghost normal-case text-xl">Doctor's Portal</CustomLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex lg:mr-10">
                    <ul className="menu menu-horizontal p-0 ">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;