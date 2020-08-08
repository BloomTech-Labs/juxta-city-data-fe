import React from "react";
import  { anime } from "react-anime";
import "../../../index.scss";

function ProfileInputs({ handleSubmit, addHandleChange }) {
  var current = null;


  
  const handleSubmitFocus = (e) => {
    if (current) current.pause();
    current = anime({
      targets: "path",
      strokeDashoffset: {
        value: -2421,
        duration: 700,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: "522 3000",
        duration: 700,
        easing: "easeOutQuart",
      },
    });
  };
  const handleTextFocus = (e) => {
    if (current) current.pause();
    //console.log(e);debugger;
    current = anime({
      targets: "path",
      strokeDashoffset: {
        value: e.target.dataset.strokedashoffset,
        duration: 700,
        easing: "easeOutQuart",
      },
      strokeDasharray: {
        value: e.target.dataset.strokedasharray,
        duration: 700,
        easing: "easeOutQuart",
      },
    });
  };

  return (
    <div className="demensions">
      <div>
        <svg viewBox="0 0 320 550.8">
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
            d="M282.8,23l-240,0c0,0-25,0.8-25,35c0,34.2,25,35,25,35l-5.5,0l240,0c0,0,25,0.8,25,35c0,34.2-25,35-25,35l5.5,0l-240,0
	c0,0-25,0.8-25,35c0,34.2,25,35,25,35l-5.5,0l240,0c0,0,25,0.8,25,35c0,34.2-25,35-25,35l8.3,0l-240,0c0,0-25,0.8-25,35
	c0,34.2,25,35,25,35l-5.5,0l240,0c0,0,25,0.8,25,35c0,34.2-25,35-25,35H40c0,0-25,4-25,38.5S40,520,40,520h215c0,0,20-1,20-25
	s-20-25-20-25H65c0,0-20,1.7-20,25c0,24,20,25,20,25h168.6"
          />
          {/*<path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />*/}
        </svg>
        <form
          style={{ position: "absolute", zIndex: 10, margin: "0 40px" }}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <label  className="label" for="first_name" aria-label="first name"></label>
            <input
              type="text"
              placeholder="First Name"
              class="input"
              name="first_name"
              data-strokedashoffset="0"
              data-strokedasharray="240 3000"
              onFocus={handleTextFocus}
            />
          

          <label className="label" for="last_name" aria-label="last name"></label>
          <input
            type="text"
            placeholder="Last Name"
            class="input"
            name="last_name"
            data-strokedashoffset="-331"
            data-strokedasharray="240 3000"
            onFocus={handleTextFocus}
          />
          <label className="label" for="dob" aria-label="birth date"></label>
          <input
            class="input datepicker"
            id="dob"
            type="date"
            name="dob"
            data-strokedashoffset="-686"
            data-strokedasharray="240 3000"
            onFocus={handleTextFocus}
            onChange={addHandleChange}aria-label="date of birth"
          />

          <label className="label" for="address" aria-label="address"></label>
          <input
            type="text"
            placeholder="Address"
            class="input"
            name="address"
            data-strokedashoffset="-1012"
            data-strokedasharray="240 3000"
            onFocus={handleTextFocus}
            onChange={addHandleChange}
          />

          <label className="label" for="city" aria-label="city"></label>
          <input
            type="text"
            placeholder="City"
            class="input"
            name="city"
            data-strokedashoffset="-1367"
            data-strokedasharray="240 3000"
            onFocus={handleTextFocus}
            onChange={addHandleChange}
          />

          <div>
            <label className="label" for="inlineFormCustomSelectPref" aria-label="state"></label>
            <select
              data-strokedashoffset="-1696"
              data-strokedasharray="240 3000"
              onFocus={handleTextFocus}
              class="input"
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
            <label className="label" for="Zip Code" aria-label="zip code"></label>
            <input
              type="number"
              placeholder="Zip Code"
              class="input"
              name="zip"
              data-strokedashoffset="-2040"
              data-strokedasharray="240 3000"
              onFocus={handleTextFocus}
              onChange={addHandleChange}
            />
          </div>

          <div className="center" style={{ marginTop: "40px" }}>
            <button
              type="submit"
              onFocus={handleSubmitFocus}
              className="btn "
            >
              Add Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileInputs;
