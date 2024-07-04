import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Card from "./Card";
const Freebook = () => {
  const filterData = list.filter((data) => data.category === "Free");
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
      <div>
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
