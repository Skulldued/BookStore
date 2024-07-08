import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Course from "./component/Course";
import Courses from "./courses/Courses";
import Signup from "./component/Signup";
import Contact from "./Contact/Contact";
import About from "../About/About";

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/About"} element={<About/>}/>
          <Route path={"/courses"} element={<Courses/>}/>
          <Route path= {"/Signup"} element={<Signup/>} />
          <Route path={"/Contact"} element={<Contact/>} />
        </Routes>
    
      <Footer />
    </div>
  );
};

export default App;
