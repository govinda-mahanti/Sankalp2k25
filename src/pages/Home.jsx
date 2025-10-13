import React from 'react';
import Background from "../components/background";
import Timer from "../components/Timer";
import About from "../components/About";
import Faq from "../components/Faq";
import Explore from "../components/Explore";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Shades from "../components/Shades";

const Home = () => {
  return (
    <>
      <Background />
      <Timer />
      <Shades/>
      <About />
      <Explore />
      <Faq />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
