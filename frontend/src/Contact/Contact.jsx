import React from 'react'
import contactImg from "../assets/contact.png";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='max-w-[1240px] mx-auto md:mt-20 mt-10'>
       <div className="grid md:grid-cols-2 mx-auto">
        <div>
          <img src={contactImg} alt="@contact" />
        </div>
        <div>
          <div className='w-full p-8'>
             <form action="" method='post' onSubmit={handleSubmit(onSubmit)}>
              <div className="my-2 flex flex-col">
                <label htmlFor="">Name</label>
                <input type="text" {...register('name',{required:true})} className='p-2 rounded-md bg-transparent border outline-none focus:border-yellow-400 text-white my-2' placeholder='Enter Name' />
                {errors.name && <p className='text-red-500'>Enter Name</p>}
              </div>
              <div className="my-2 flex flex-col">
                <label htmlFor="">Email</label>
                <input type="email" {...register("email",{required:true})} className='p-2 rounded-md bg-transparent border outline-none focus:border-yellow-400 text-white my-2' placeholder='Enter Email' />
                {errors.email && <p className='text-red-500'>Enter Email</p>}
              </div>
              <div className='grid md:grid-cols-2 gap-5'>
              <div className="my-2 flex flex-col">
                <label htmlFor="">Mobile Number</label>
                <input type="text" {...register("mobile",{required:true})} className='p-2 rounded-md bg-transparent border outline-none focus:border-yellow-400 text-white my-2' placeholder='Enter Mobile Number' />
                {errors.mobile && <p className='text-red-500'>Enter Mobile Number</p>}
              </div>
              <div className="my-2 flex flex-col">
                <label htmlFor="">Message</label>
                <input type="text" className='p-2 rounded-md bg-transparent border outline-none focus:border-yellow-400  text-white my-2' {...register("message",{required:true})}  placeholder='Enter Message' />
                {errors.message && <p className='text-red-500'>Enter Message</p>}
              </div>
              </div>
              <div className="my-2 flex flex-col">
                <label htmlFor="">Address</label>
                <input type="text" {...register("address",{required:true})} className='p-2 rounded-md bg-transparent border outline-none focus:border-yellow-400 text-white my-2' placeholder='Enter Address' />
                {errors.address && <p className='text-red-500'>Enter Address</p>}
              </div>
             
             <button className='bg-yellow-500 text-black p-2 rounded-md font-bold'>Submit</button>
             </form>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Contact
