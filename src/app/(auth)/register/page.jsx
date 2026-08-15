'use client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const ResisterPage = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleResisterFunc = (data) => {
        console.log(data, "data");
         
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
               <h2 className='font-bold text-3xl text-center'>Resister Your Account</h2>

                <form className='space-y-5' onSubmit={ handleSubmit(handleResisterFunc) }>

                    <fieldset className="fieldset">
                        <label className="label" htmlFor="name">Name</label>
                        <input type="text" id="name" className="input" placeholder="Enter Your Name" {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label" htmlFor="name">Photo URL</label>
                        <input type="email" id="photo" className="input" placeholder="Enter Your Photo URL" {...register("email", { required: "Email is required" })} />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label" htmlFor="name">Email</label>
                        <input type="email" id="email" className="input" placeholder="Enter Your Email" {...register("photo", {required: "Photo URL is required"})} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="name">Password</label>
                        <input type="password" id="password" className="input" placeholder="Enter Your Password" {...register("password", {required: "Password is required"})}/>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Resister</button>
               </form>
                
            </div>
        </div>
    );
};

export default ResisterPage;