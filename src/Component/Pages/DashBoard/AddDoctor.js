import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner';
import axiosPrivate from "../../Api/axiosPrivate";

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const {data: services , isLoading} = useQuery('services',()=> axios.get('http://localhost:4000/services'))
    const imgStorageKey =  '525c9a324190eefb662d7ef83c111fcd'


    
    if(isLoading){
        return <Spinner/>
    }



    const onSubmit = async data => {
        const image = data.doctorPicture[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result=> {
            if(result.success) {
                const img = result.data.url
                const doctor = {
                    name: data.doctorName,
                    email: data.doctorEmail,
                    specialty: data.specialty,
                    img: img,
                }
                axiosPrivate.post('http://localhost:4000/doctor', doctor)
                .then(data=> {
                    if(data.data.insertedId){
                        toast.success('Successfully Added A Doctor')
                        reset()
                    }
                    else{
                        toast.error('Failed to add a Doctor')
                    }
                })
                
            }
        })
    };
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className='text-3xl'>Add new doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Doctor's Name</span>
                    </label>
                    <input {...register("doctorName", { required: "Doctor's Name is required"  })} type="text" placeholder="Your Name" className="input input-bordered" />
                    <p className='text-red-500'>{errors.name && errors.name.message}</p>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Doctor's Email</span>
                    </label>
                    <input {...register("doctorEmail", { required: "Doctor's is required", pattern: { value: /^[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })} type="email" placeholder="Your Email" className="input input-bordered"  />
                    <p className='text-red-500'>{errors.email && errors.email.message}</p>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Doctor's Specialty</span>
                    </label>
                    <select  {...register("specialty")} name="specialty" className="select select-bordered w-full max-w-xs">
                            {
                                services?.data?.map((service) => <option key={service._id}  value={service.name} >{service.name}</option>)
                            }
                        </select>
                    <p className='text-red-500'>{errors.specialty && errors.specialty.message}</p>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Doctor's Picture</span>
                    </label>
                    <input {...register("doctorPicture", { required: "Doctor's Picture is required"  })} type="file"  className="input input-bordered" />
                    <p className='text-red-500'>{errors.name && errors.name.message}</p>
                </div>

                <div className="form-control mt-6">
                    <button className='btn text-white font-bold btn-accent'>Add A Doctor</button>
                </div>

            </form>
        </div>
    );
};

export default AddDoctor;