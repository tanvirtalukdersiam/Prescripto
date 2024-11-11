import React from "react";
import Hero from "../components/Hero";
import Find_by_Speciality from "../components/Find_by_Speciality";
import Doctors_Book from "../components/Doctors_Book";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Hero />
      <Find_by_Speciality />
      <Doctors_Book />
      <Banner />
    </div>
  );
};

export default Home;
