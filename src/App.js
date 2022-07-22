import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Nav from "./Nav";
import Contact from "./Contact";
import Form from "./Form"
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact/form" element={<Form/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </>
  );
};
export default App;
