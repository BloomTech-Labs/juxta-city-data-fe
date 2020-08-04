import React from "react";
import Anime, { anime } from "react-anime";
import "./testform.css";

function TestForm() {
  var current = null;

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

  return (
      <form className="demensions">
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
        <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
      </svg>
      <div class="form">
        <label for="email">Email</label>
        <input type="email" id="email" onFocus={handleEmailFocus} />
        <label for="password">Password</label>
        <input type="password" id="password" onFocus={handlePasswordFocus} />
        <input type="submit" id="submit" value="Submit" onFocus={handleSubmitFocus} />
        
      </div>
    </div>
    </form>
  );
}

export default TestForm;
