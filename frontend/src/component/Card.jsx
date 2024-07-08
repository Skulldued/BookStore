import React from "react";

const Card = ({item}) => {
    console.log(item);
  return (
    <>
     <div className="md:px-10 ">
     <div className="card md:my-16 border-[1px]  my-10 hover:scale-105 hover:border-2 duration-300 card-compact bg-base-100 w-80 shadow-xl">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.name} <button className="bg-pink-500 text-white text-[14px] rounded-full px-2 ">new</button> </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <button className="px-3 py-1 rounded-full text-white bg-green-700">${item.price}</button>
            <button className="px-3 py-1 rounded-full text-white hover:bg-pink-600 duration-500 bg-blue-600">Buy Now</button>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Card;
