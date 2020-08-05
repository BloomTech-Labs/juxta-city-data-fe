import React from "react";
import Anime, { anime } from "react-anime";
import Button from "@material-ui/core/Button";
import SelectState from "./SelectState";
import TextField from "@material-ui/core/TextField";
import formStyles from "../profileStyles/formStyles";
import "./testform.css";

function TestForm() {
  var current = null;
//   const classes = formStyles();

   const handleEmailFocus =  (e) => {
    if (current) current.pause();
    current = anime({
      targets: "path",
      strokeDashoffset: {
        value: 0,
        duration: 700,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: "240 1386",
        duration: 700,
        easing: "easeOutQuart",
      },
    });
  }


   const handlePasswordFocus =  (e) =>  {
    if (current) current.pause();
    current = anime({
      targets: "path",
      strokeDashoffset: {
        value: -336,
        duration: 700,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: "240 1386",
        duration: 700,
        easing: "easeOutQuart",
      },
    });
  }
  const handleSubmitFocus =  (e) => {
    if (current) current.pause();
    current = anime({
      targets: "path",
      strokeDashoffset: {
        value: -730,
        duration: 700,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: "530 1386",
        duration: 700,
        easing: "easeOutQuart",
      },
    });
  }
  const handleTextFocus = (e)=>{
      if (current) current.pause();
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: "easeOutQuart",
        },
        strokeDasharray: {
          value: "530 1386",
          duration: 700,
          easing: "easeOutQuart",
        },
      });
  }

  return (
    <div className="demensions">
      <div class="right">
        <svg viewBox="0 0 320 300">
          <defs>
            <linearGradient
              inkscapeCollect="always"
              id="linearGradient"
              x1="13"
              y1="193.49992"
              x2="307"
              y2="193.49992"
              gradientUnits="userSpaceOnUse"
            >
              <stop style={{ stopColor: "#ff00ff" }} offset="0" id="stop876" />
              <stop style={{ stopColor: "#ff0000" }} offset="1" id="stop878" />
            </linearGradient>
          </defs>
          <path
            d="M285.5,50l-240,0c0,0-25,0.8-25,35c0,34.2,25,35,25,35l-5.5,0l240,0c0,0,25,0.8,25,35c0,34.2-25,35-25,35H40
	c0,0-25,4-25,38.5S40,267,40,267h215c0,0,20-1,20-25s-20-25-20-25H65c0,0-20,1.7-20,25c0,24,20,25,20,25h168.6"
          />
          {/*<path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />*/}
        </svg>
        <form noValidate autoComplete="off">
          <label for="first_name">First Name</label>
          <input
            type="text"
            class="input"
            name="first_name"
            onChange={addHandleChange}
            aria-describedby="first_name"
          />
          <label for="last_name">Last Name</label>
          <input
            type="text"
            class="input"
            name="last_name"
            onChange={addHandleChange}
            aria-describedby="first_name"
          />
          <label for="dob">Date of birth</label>
          <input
            class=" input datepicker"
            id="dob"
            placeholder="Your B-DAY!"
            type="date"
            name="dob"
            onChange={addHandleChange}
            aria-label="date of birth"
          />
          <input label="Address" type="text" name="address" />
          <input label="City" type="text" name="city" />
          <select>
            <option value=""></option>
          </select>
          <input label="Zip code" type="number" name="zip" />
          <Button type="submit" variant="outlined" color="primary">
            Add profile
          </Button>
        </form>
      </div>
    </div>
  );
}

export default TestForm;
