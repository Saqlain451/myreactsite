import React from "react";
import { NavLink } from 'react-router-dom'

const Comp = (props) => {
  return (
    <>
      <div className="container">
        <div className="row home mt-5">
          <div className="col-md-6 order-2 order-lg-1 mt-5 mt-lg-0">
            <h2 className="text-lg-start text-center">{props.hText}</h2>
            <h2 className="brand text-lg-start text-center">H Saqlain</h2>
            <p className="text-lg-start text-center">We are the team of talented developer making website</p>
            <button className="btn btn-started mx-auto d-block mx-lg-0"><NavLink to={props.page} className="test">
              {" "}
              {props.btnText}{" "}
            </NavLink>
            </button>
          </div>
          <div className="col-md-6 order-1 order-lg-2">
            <img src={props.img} className="img-fluid animated" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp;
