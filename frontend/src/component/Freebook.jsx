import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Card from "./Card";
const Freebook = () => {
  const [book,setBook] = useState([]);
  useEffect(()=>{
     const getBooks = async()=>{
      try {
        const res =await axios.get("http://localhost:4001/book");
        // console.log(book);
        setBook(res.data);
      } catch (error) {
        console.log(error.message);
      }
     };
     getBooks();
  },[]);
  const filterData = book.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 my-10 md:my-20 px-4">
      <div className="free">
        <h3 className="font-bold text-2xl py-6 text-justify">
          Free Offered Course
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          molestiae rem nisi dolor nesciunt, quam laudantium sunt cumque nostrum
          harum!quam laudantium sunt cumque nostrum harum!quam laudantium sunt
          cumque nostrum harum!
        </p>
      </div>
      <div className="">
      <Slider {...settings}>
       {filterData.map((items)=>(
        //parent passing value throgh props
        <Card item={items} key={items.id} />
       ))}
      </Slider>
      </div>
    </div>
  );
};

export default Freebook;
