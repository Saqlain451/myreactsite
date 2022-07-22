import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="col-10 col-md-4">
        <div className="card">
          <img src={props.img} alt="img"  height="250vh" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <NavLink to={props.path}  className="btn btn-primary">Go somewhere</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
