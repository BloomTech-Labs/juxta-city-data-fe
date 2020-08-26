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

  const inputData = [ {name: "first_name", placeholder: "First Name", type: "text", "dataStrokedashoffset":"0"},
  { name: "last_name", placeholder: "Last Name", type: "text", "dataStrokedashoffset":"-331" },
  { name: "dob", placeholder: "Date of birth", type: "date",  "dataStrokedashoffset":"-686"},
  { name: "address", placeholder: "Address", type: "text", "dataStrokedashoffset": "-1012"},
  { name: "city", placeholder: "City", type: "text",  "dataStrokedashoffset":"-1367"}];

 
  return (
    <div className="demensions">
      <div>
        <SVGstyle />
        <form
          style={{ position: "absolute", zIndex: 10, margin: "0 40px" }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {inputData.map((item, index) => (
            <div key={index}>
              <label className="form-label" htmlFor={item.name}>
                {item.placeholder}
              </label>
              <input
                data-testid={item.name}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                className="input"
                data-strokedashoffset={item.dataStrokedashoffset}
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
          <ZipCode
            addHandleChange={addHandleChange}
            handleTextFocus={handleTextFocus}
          />

          <div className="center">
            <button type="submit" onFocus={handleSubmitFocus} className="btn" data-testid="submit">
              Add Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileInputs;
