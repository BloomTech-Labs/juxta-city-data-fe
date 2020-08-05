import React from "react";
import Anime, { anime } from "react-anime";
import Button from "@material-ui/core/Button";
import SelectState from "./SelectState";
import TextField from "@material-ui/core/TextField";
import formStyles from "../profileStyles/formStyles";
import "./testform.css";

function TestForm({ handleSubmit, addHandleChange }) {
  var current = null;
  //   const classes = formStyles();

  const handleEmailFocus = (e) => {
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
  };

  const handlePasswordFocus = (e) => {
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
  };
  const handleSubmitFocus = (e) => {
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
  };
  const handleTextFocus = (e) => {
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
  };

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
	c0,0-25,4-25,38.5S40,267,40,267h215c0,0,20-1,20-25s-20-25-20-25H65c0,0-20,1.7-20,25c0,24,20,25,20,25h168.6"/>
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
          <div class="form-group mb-3">
            <label for="address">Address</label>
            <input
              type="text"
              class="input"
              name="address"
              onChange={addHandleChange}
              aria-describedby="address"
            />
          </div>
          <div class="form-group mb-3">
            <label for="city">City</label>
            <input
              type="text"
              class="input"
              name="city"
              onChange={addHandleChange}
              aria-describedby="city"
            />
          </div>
          <div class="form-group">
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">
              State
            </label>
            <select
              class="input custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option selected>Choose...</option>
              <option value="1">Alabama</option>
              <option value="2">Alaska</option>
              <option value="3">Arizona</option>
              <option value="4">Arkansas</option>
              <option value="5">California</option>
              <option value="6">Colorado</option>
              <option value="7">Connecticut</option>
              <option value="8">Delaware</option>
              <option value="9">Florida</option>
              <option value="10">Georgia</option>
              <option value="11">Hawaii</option>
              <option value="12">Idaho</option>
              <option value="13">Illinois</option>
              <option value="14">Indiana</option>
              <option value="15">Iowa</option>
              <option value="16">Kansas</option>
              <option value="17">Kentucky</option>
              <option value="18">Louisiana</option>
              <option value="19">Maine</option>
              <option value="20">Maryland</option>
              <option value="21">Massachusetts</option>
              <option value="22">Michigan</option>
              <option value="23">Minnesota</option>
              <option value="24">Mississippi</option>
              <option value="25">Missouri</option>
              <option value="26">Montana</option>
              <option value="27">Nebraska</option>
              <option value="28">Nevada</option>
              <option value="29">New Hampshire</option>
              <option value="30">New Jersey</option>
              <option value="31">New Mexico</option>
              <option value="32">New York</option>
              <option value="33">North Carolina</option>
              <option value="34">North Dakota</option>
              <option value="35">Ohio</option>
              <option value="36">Oklahoma</option>
              <option value="37">Oregon</option>
              <option value="38">Pennsylvania</option>
              <option value="39">Rhode Island</option>
              <option value="40">South Carolina</option>
              <option value="41">South Dakota</option>
              <option value="42">Tennessee</option>
              <option value="43">Texas</option>
              <option value="44">Utah</option>
              <option value="45">Vermont</option>
              <option value="46">Virginia</option>
              <option value="47">Washington</option>
              <option value="48">West Virginia</option>
              <option value="49">Wisconsin</option>
              <option value="50">Wyoming</option>
            </select>
          </div>

          <div>
            <label for="Zip Code">Zip Code</label>
            <input
              type="number"
              class="input"
              name="zip"
              onChange={addHandleChange}
            />
          </div>

          <button type="submit" class="btn">
            Add Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default TestForm;
