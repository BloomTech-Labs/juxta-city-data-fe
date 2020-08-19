import React from "react";

const ZipCode = ({ addHandleChange, handleTextFocus ,defaultv}) => {

  return (
    <input
      placeholder="Zip Code"
      className="input"
      name="zip"
      data-strokedashoffset="-2040"
      data-strokedasharray="240 3000"
      type="number"
      defaultValue={defaultv}
      onFocus={handleTextFocus}
      onChange={addHandleChange}
    />
  );
};
export default ZipCode;
