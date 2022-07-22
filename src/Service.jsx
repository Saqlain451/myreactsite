import React from "react";
import Card from "./Card";
import data from "./Data";
const Service = () => {
  return (
    <>
      <div className="row jutify-content-center mt-5 mb-3">
        <div className="col-md-12">
          <h1 className="text-center">Our Services</h1>
        </div>
      </div>
      <div className="container my-5">
        <div className="row gy-4 mb-5 justify-content-center">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                img={item.img}
                text={item.text}
                path={item.path}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
