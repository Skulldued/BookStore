import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <div>
      
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" >
           
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg py-3 text-center">Login</h3>
           <div className="form-section w-full">
               <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="py-3 ">
                <p className="text-white font-bold py-2">Email</p>
                <input type="email" {...register('email',{ required: true })}  placeholder="Enter Email Here" className="w-full p-2 text-white bg-transparent border-[1px] rounded" />
                {errors.email && <p className="text-red-500">Email is required.</p>}
               
                </div>
                <div className="py-3 ">
                <p className="text-white font-bold py-2">Password</p>
                <input type="password" {...register('password',{required:true})} placeholder="Enter Password Here" className="w-full text-white p-2 bg-transparent border-[1px] rounded" />
                {errors.password && <p className="text-red-500">Enter Password.</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-pink-500 rounded-full px-4 py-2 my-2 text-white">Login</button>
                    <div>
                        <p>Not Registered ? <Link to="/Signup">SignUp</Link> </p>
                    </div>
                </div>
               </form>
           </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
