import React from 'react'
import signupImg from "../assets/signup.png";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='max-w-[1240px] mx-auto '>
      <div className='grid  md:grid-cols-2 md:mt-36 mx-auto  mt-16'>
             <div>
                <img src={signupImg} alt="" />
             </div>
             <div className='flex items-center justify-center'>
               <div className=" w-full  border-2 border-dashed p-8 ">
               <form action="" method='post' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <label htmlFor="">Name</label>
                        <input type="text" {...register('name',{required:true})} placeholder='Enter Name Here' className='p-2 bg-transparent border-[1px] focus:border-sky-500 my-2 outline-none  rounded-md' />
                        {errors.name && <p className='text-red-500'>Enter Name Here</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Email</label>
                        <input type="email" {...register('email',{required:true})} placeholder='Enter Email Here' className='p-2 bg-transparent border-[1px] focus:border-sky-500 outline-none my-2 rounded-md' />
                        {errors.email && <p className='text-red-500'>Enter Email Here</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Password</label>
                        <input type="password" {...register('password',{required:true})} placeholder='Enter Password Here' className='p-2 my-2 bg-transparent border-[1px] focus:border-sky-500 outline-none  rounded-md' />
                        {errors.password && <p className='text-red-500'>Enter Password</p>}
                    </div>
                    <div>
                      <button className='btn btn-primary text-white'>Submit</button>
                    </div>
                </form>
               </div>
             </div>
      </div>
    </div>
  )
}

export default Signup
