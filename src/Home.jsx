import React from "react";
import Comp from "./Comp";
import Contact from "./Contact";
import Started from './Images/started.png'
import Service from "./Service";

const Home = () => {
  return (
    <>
      <Comp
        hText="Grow your business with"
        btnText=" Get started "
        page="/service"
        img ={Started}
      />
      <Service/>
      <Contact/>
    </>
  );
};

export default Home;
