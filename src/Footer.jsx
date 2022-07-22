import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <p className="text-center bg-light">
           © {year} H Saqlain, All Right Reserved | Terms and Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
