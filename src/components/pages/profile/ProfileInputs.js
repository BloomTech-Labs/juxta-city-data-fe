import React from "react";
import "../../../index.scss";
import StateSelect from "./StateSelect";
import ZipCode from "./ZipCode";
import {
  handleSubmitFocus,
  handleTextFocus
} from "./SVGfunctions"; 
import SVGstyle from './SVGstyle'

function ProfileInputs({ handleSubmit, addHandleChange }) {

  const inputData = [ {name: "first_name", placeholder: "First Name", type: "text"},
  { name: "last_name", placeholder: "Last Name", type: "text"},
  { name: "dob", placeholder: "Date of birth", type: "date"},
  { name: "address", placeholder: "Address", type: "text"},
  { name: "city", placeholder: "City", type: "text"}];

 
  return (
    <div className="demensions">
      <div>      
        <SVGstyle/>
        <form
          style={{ position: "absolute", zIndex: 10, margin: "0 40px" }}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          {inputData.map((item, index) => (
            <div key={index}>
              <label
                className="label"
                htmlFor={item.name}
              >{item.placeholder}</label>
              <input
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                className="input"
                data-strokedashoffset="0"
                data-strokedasharray="240 3000"
                onFocus={handleTextFocus}
                onChange={addHandleChange}
                aria-label={item.placeholder}
              />
            </div>
          ))}
         
          <StateSelect
            addHandleChange={addHandleChange}
            handleTextFocus={handleTextFocus}
          />
          <label className="label" htmlFor="Zip Code" >
            Zip Code
          </label>
          <ZipCode
            addHandleChange={addHandleChange}
            handleTextFocus={handleTextFocus}
          />
          <div className="center">
            <button type="submit" onFocus={handleSubmitFocus} className="btn">
              Add Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileInputs;
