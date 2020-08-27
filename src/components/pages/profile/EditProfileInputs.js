import React from "react";
import "../../../index.scss";
import StateSelect from "./StateSelect";
import ZipCode from "./ZipCode";
import Loading from "./Loading";
import {
  handleSubmitFocus,
  handleTextFocus
} from "./SVGfunctions"; 
import SVGstyle from './SVGstyle'


function EditProfileInputs({ handleSubmit, addHandleChange, userData }) {
  if (userData) {
    const inputData = [ {name: "first_name", placeholder: "First Name", value: userData.first_name,type: "text", "dataStrokedashoffset":"0"  },
      { name: "last_name", placeholder: "Last Name", value: userData.last_name,type: "text", "dataStrokedashoffset":"-331" },
      { name: "dob", placeholder: "Date of birth", value: userData.dob,type: "date", "dataStrokedashoffset":"-686"  },
      { name: "address", placeholder: "Address", value: userData.address,type: "text", "dataStrokedashoffset": "-1012"  },
      { name: "city", placeholder: "City", value: userData.city,type: "text", "dataStrokedashoffset":"-1367" }];
   
    return (
      <div className="demensions">
        <div>
          <SVGstyle/>
          <form style={{ position: "absolute", zIndex: 10, margin: "0 40px" }}
            noValidate autoComplete="off"  onSubmit={handleSubmit}>

            {inputData.map((item, index) => (
              <div key={index}>
                <label className="form-label" htmlFor={item.name} > {item.placeholder} </label>
                <input
                  name={item.name} type={item.type}  placeholder={item.placeholder}
                  className="input" data-strokedashoffset={item.dataStrokedashoffset} data-strokedasharray="240 3000"
                  onFocus={handleTextFocus} onChange={addHandleChange}  aria-label={item.placeholder} defaultValue={item.value}  />
              </div>
            ))}
            <StateSelect  addHandleChange={addHandleChange} handleTextFocus={handleTextFocus} defaultv={userData.state}  />

            <ZipCode  addHandleChange={addHandleChange} handleTextFocus={handleTextFocus}  defaultv={userData.zip} />
            <div className="center">
              <button type="submit"  onFocus={handleSubmitFocus}  className="btn" > Edit Profile  </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else { 
 return (<Loading/>)
  }
}
export default EditProfileInputs;
