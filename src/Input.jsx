import React from "react";

const Input = (props) => {
  return (
    <>
      <div class="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          {props.title}
        </label>
        <input
          type={props.type}
          className="form-control"
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </>
  );
};

export default Input;
