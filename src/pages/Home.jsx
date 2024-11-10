import React from "react";
import Hero from "../components/Hero";
import Find_by_Speciality from "../components/Find_by_Speciality";
import Doctors_Book from "../components/Doctors_Book";

const Home = () => {
  return (
    <div>
      <Hero />
      <Find_by_Speciality />
      <Doctors_Book />
    </div>
  );
};

export default Home;
