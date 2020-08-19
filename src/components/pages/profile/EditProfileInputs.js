import React from "react";
import "../../../index.scss";
import StateSelect from "./StateSelect";
import ZipCode from "./ZipCode";
import {
  handleSubmitFocus,
  handleTextFocus
} from "./SVGfunctions"; 
import SVGstyle from './SVGstyle'


function EditProfileInputs({ handleSubmit, addHandleChange, userData }) {
  if (userData) {
    const inputData = [ {name: "first_name", placeholder: "First Name", value: userData.first_name,type: "text"},
      { name: "last_name", placeholder: "Last Name", value: userData.last_name,type: "text"},
      { name: "dob", placeholder: "Date of birth", value: userData.dob,type: "date"},
      { name: "address", placeholder: "Address", value: userData.address,type: "text"},
      { name: "city", placeholder: "City", value: userData.city,type: "text"}];
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
            {inputData.map((item) => (
              <>
                <label
                  className="label"
                  htmlFor={item.name}
                  aria-label={item.name}
                >
                </label>
                <input
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  class="input"
                  data-strokedashoffset="0"
                  data-strokedasharray="240 3000"
                  defaultValue={item.value}
                  onFocus={handleTextFocus}
                  onChange={addHandleChange}
                />
              </>
            ))}
            <StateSelect
              addHandleChange={addHandleChange}
              handleTextFocus={handleTextFocus}
              defaultv={userData.state}
            />
            <label className="label" htmlFor="Zip Code" aria-label="zip code">
              Zip
            </label>
            <ZipCode
              addHandleChange={addHandleChange}
              handleTextFocus={handleTextFocus}
              defaultv={userData.zip}
            />
            <div className="center">
              <button
                type="submit"
                onFocus={handleSubmitFocus}
                className="btn "
              >
                Edit Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <h1>loading profile data...</h1>;
  }
}
export default EditProfileInputs;
