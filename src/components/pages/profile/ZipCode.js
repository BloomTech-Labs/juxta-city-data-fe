import React from "react";

const ZipCode = ({ addHandleChange, handleTextFocus ,defaultv}) => {

  return (
    <div>
      <label className="form-label" htmlFor="Zip Code" > Zip Code </label>
      <input
        name="zip"
        type="number"
        placeholder="Zip Code"
        className="input"
        data-strokedashoffset="-2040"
        data-strokedasharray="240 3000"
        defaultValue={defaultv}
        onFocus={handleTextFocus}
        onChange={addHandleChange}
        aria-label="Zip Code"
      />
    </div>
  );
};
export default ZipCode;
