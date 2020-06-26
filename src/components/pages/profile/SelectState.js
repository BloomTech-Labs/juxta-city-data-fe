import React from "react";
import formStyles from "../profileStyles/formStyles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import states from '../data/states';

function SelectState({addHandleChange}) {
    const classes = formStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
      <Select
        name="state"
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        onChange={addHandleChange}
        label="State"
      >
          {states.map((item)=>{
              return (
               <MenuItem value={item.value}>{item.state}</MenuItem>)
          })}
      </Select>
    </FormControl>
  );
}
export default SelectState;
