import React from "react";
import states from '../data/states';

function StateSelect({addHandleChange, handleTextFocus, defaultv }) {

  return (
    <div>
      <label  className="label"
              aria-label="state">State</label>
      <select
         data-strokedashoffset="-1696"
         data-strokedasharray="240 3000"
         onFocus={handleTextFocus}
         onChange={addHandleChange}
         className="input"
         name="state"
         defaultValue={defaultv}
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