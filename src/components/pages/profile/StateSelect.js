import React from "react";
import states from '../data/states';

function StateSelect({addHandleChange, defaultv }) {

  return (
    <div>
      <select
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