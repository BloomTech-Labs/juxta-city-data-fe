import React from "react";
import states from '../data/states';

function StateSelect({addHandleChange, handleTextFocus, defaultv }) {

  return (
    <div>
      <label className="form-label" htmlFor="State">State</label>
      <select
         data-strokedashoffset="-1696"
         data-strokedasharray="240 3000"
         onFocus={handleTextFocus}
         onChange={addHandleChange}
         className="input"
         name="state"
         defaultValue={defaultv}
         aria-label="State"
         placeholder="state"
      >
          {states.map((item, index)=>{
              return (
               <option key ={index} value={item.value}>{item.state}</option>)
          })}
      </select>
    </div>
  );
}
export default StateSelect;