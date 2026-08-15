'use client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const { register, handleSubmit, watch, formState: {errors} } = useForm();

    const handleLoginFunc = (data) => {
        console.log(data, "data");
         
    };

    console.log(watch("email"));
    console.log(watch("password"));

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
               <h2 className='font-bold text-3xl text-center'>Login Your Account</h2>

                <form className='space-y-5' onSubmit={ handleSubmit(handleLoginFunc) }>
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="name">Email</label>
                        <input type="email" id="email" className="input" placeholder="Enter Your Email" {...register("email", {required: "Email is required"})} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="name">Password</label>
                        <input type="password" id="password" className="input" placeholder="Enter Your Password" {...register("password", {required: "Password is required"})}/>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Login</button>
               </form>
                <p className='mt-4'>Dont have an account? <Link href={"/register"} className='text-blue-500'>Register</Link> </p>
            </div>
        </div>
    );
};

export default LoginPage;