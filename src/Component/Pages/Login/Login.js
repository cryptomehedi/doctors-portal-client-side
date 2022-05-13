import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title flex justify-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            <p className="text-red-500">{errors.email?.type === 'required' && "Email is required"}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("pass", { required: true })} type="text" placeholder="password" className="input input-bordered" />
                            <p className='text-red-500'>{errors.pass && "Password is Required"}</p>
                            <label className="label">
                                <button className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent  text-white uppercase font-bold">Login</button>
                        </div>
                    </form>
                    <p className="text-center">New To Doctors Portal? <Link to='/register' className='text-secondary cursor-pointer'>Create New Account</Link> </p>
                    <SocialLogin/>
                </div>
            </div>
        </div>
    );
};

export default Login;