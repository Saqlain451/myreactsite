import React from "react";
import Input from "./Input";

const Form = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-10 col-md-4">
            <h1 className="text-center">Contact Us</h1>
            <form action="" className="mt-4">
              <Input
                type="text"
                title="Full Name"
                placeholder="Enter your full name"
                name="name"
              />
              <Input
                title="Mobile No"
                type="number"
                placeholder="Enter your mobile No"
                name="number"
              />
              <Input
                title="Email Id"
                type="mail"
                placeholder="Enter your email id"
                name="email"
              />

              <label class="form-label">Message</label>
              <textarea class="form-control" rows="4" />
              <button className="btn btn-success mt-3 mx-auto d-block">
              send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
