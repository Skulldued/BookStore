import React, { useEffect, useState } from "react";
import bookHero from "../assets/bookhero.jpg";
import axios from "axios";
import Card from "../component/Card";
import { Link } from "react-router-dom";
const Courses = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
        console.log(book);
      } catch (error) {
        console.log(error.messsage);
      }
    };
    getBooks();
  }, []);
  return (
    <div className="min-h-screen bg-base-100  ">
      <div className="md:mt-20">
        <img src={bookHero} className="hidden md:flex" alt="" />
      </div>
      <div className="max-w-screen-2xl mx-auto container px-4 md:px-20">
        <div className="md:py-10 pt-20">
          <h2 className="text-3xl font-bold text-center">
            We're Delighted To Have You Here : )
          </h2>
          <p className="text-center py-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam veniam
            esse, dicta veritatis, dignissimos nulla fugiat, cumque aliquid
            dolorem earum id voluptates. Doloribus repudiandae reprehenderit
            quod velit repellendus. Facilis exercitationem quisquam
            reprehenderit inventore rem consectetur magni? Facere vel ullam
            temporibus nesciunt assumenda similique quam porro asperiores,
            corporis aut, ducimus sint.
          </p>
          <div className=" flex justify-center">
            <Link
              to="/"
              className="bg-pink-500 rounded-full px-4 text-white py-2 "
            >
              <button>Back</button>
            </Link>
          </div>
        </div>
        {/* card section start */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {book.map((items, index) => (
            <Card key={items.id} item={items} />
          ))}
        </div>
        {/* card section end */}
      </div>
    </div>
  );
};

export default Courses;
