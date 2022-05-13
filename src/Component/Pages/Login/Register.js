import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';


const Register = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    // const [match, setMatch] = useState(false)
    const [show, setShow] = useState(false)
    const [checked, setChecked] = useState(false)

    const pass = useRef({});
    pass.current = watch("password", "");

    const onSubmit = data => {
        
        
        console.log(data)
    };
    // console.log(confirmPass)

    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title flex justify-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("name", { required: "Your Name is required"  })} type="text" placeholder="Your Name" className="input input-bordered" />
                            <p className='text-red-500'>{errors.name && errors.name.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })} type="email" placeholder="Your Email" className="input input-bordered"  />
                            <p className='text-red-500'>{errors.email && errors.email.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <div class="relative w-full">
                                <div class="absolute inset-y-0 right-0 flex items-center px-2">
                                    <input class="hidden js-password-toggle" id="toggle" type="checkbox" />
                                    <label onClick={() => setShow(!show)} class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">{show ? 'Hide' : 'Show'}</label>
                                </div>
                                <input {...register("password", { required: "You must specify a password", pattern: {value: /^(?=.*\d)(?=.*[!@#$%^&*()-_=?<>.,])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: 'Minimum 8 characters password, upper and lower case and number required' }})} class="appearance-none  input input-bordered w-full py-3 px-3 leading-tight pr-16 font-mono js-password" placeholder='Password' type={show ? 'text' : "password"}
                                />
                            </div>
                            <p className='text-red-500'>{errors.password && errors.password.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input {...register("password_repeat", { required: "You must confirm password", validate: value => value === pass.current || "The passwords do not match" })} type="password" placeholder="Confirm Password" className="input input-bordered" />
                            <p className='text-red-500'>{errors.password_repeat && errors.password_repeat.message}</p>
                        </div>
                        <label onClick={() =>setChecked(!checked)} className="cursor-pointer label">
                            <input type="checkbox" className="checkbox checkbox-secondary" />
                            <span className="label-text">Accept <span className='text-secondary'>Doctors Portal</span> All Terms & Conditions</span>
                        </label>
                        <div className="form-control mt-6">
                            <button disabled={!checked} className={`btn  text-white uppercase font-bold ${checked ? 'btn-accent' : 'cursor-not-allowed' }`}>Register</button>
                        </div>
                    </form>
                    <p>Already Registered. Please <Link to='/login' className='text-secondary'>Login Here</Link> </p>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Register;