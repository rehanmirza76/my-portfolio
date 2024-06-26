import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import AboutContent from "../components/AboutContent";
import FooterBar from "../components/FooterBar";

const about = () => {
  return (
    <div>
      <Navigation />
      <Hero2 heading="ABOUT ME." para="A Passionate Developer who creates engaging and efficient web applications" />
      <AboutContent/>
      <Footer />
      <FooterBar/>
    </div>
  );
};

export default about;
