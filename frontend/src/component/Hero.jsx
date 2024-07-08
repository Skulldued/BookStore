import React from "react";
import Book from "../assets/book.png";
import { useForm } from "react-hook-form";
const Hero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 my-10 md:my-20 px-4">
        <div className="grid  md:grid-cols-2 md:pt-28 py-10 ">
          <div className="">
            <div>
              <h1 className="text-4xl font-bold ">
                Hello ,Welcome here to learn something{" "}
                <span className="text-pink-500">new everyday!!!</span>{" "}
              </h1>
              <p className="md:py-14 py-8 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet cumque tempore omnis voluptate, odio repudiandae illo
                excepturi eaque non debitis sint, expedita quo. Deserunt maxime
                aliquid commodi quod minus doloribus.
              </p>
            </div>
            <form action="" method="post" onSubmit={handleSubmit(onsubmit)} >
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                {...register('name',{required:true})}
                className="grow"
                placeholder="Enter your Email to login"
              />
              {errors.name && <p className="text-red-700">Enter Email Please</p>}
            </label>
            <div>
              <button className="bg-blue-800 md:my-8 my-4 p-3 rounded-lg">
                Send
              </button>
            </div>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <img src={Book} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
