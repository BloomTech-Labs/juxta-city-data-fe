import React, { useState } from "react";
import axios from "axios";
import { styles } from "./authStlyes";


// const states = (
//   <>
//     <option>Select a State</option>
//     <option value="AL">Alabama</option>
//     <option value="AK">Alaska</option>
//     <option value="AZ">Arizona</option>
//     <option value="AR">Arkansas</option>
//     <option value="CA">California</option>
//     <option value="CO">Colorado</option>
//     <option value="CT">Connecticut</option>
//     <option value="DE">Delaware</option>
//     <option value="DC">District Of Columbia</option>
//     <option value="FL">Florida</option>
//     <option value="GA">Georgia</option>
//     <option value="HI">Hawaii</option>
//     <option value="ID">Idaho</option>
//     <option value="IL">Illinois</option>
//     <option value="IN">Indiana</option>
//     <option value="IA">Iowa</option>
//     <option value="KS">Kansas</option>
//     <option value="KY">Kentucky</option>
//     <option value="LA">Louisiana</option>
//     <option value="ME">Maine</option>
//     <option value="MD">Maryland</option>
//     <option value="MA">Massachusetts</option>
//     <option value="MI">Michigan</option>
//     <option value="MN">Minnesota</option>
//     <option value="MS">Mississippi</option>
//     <option value="MO">Missouri</option>
//     <option value="MT">Montana</option>
//     <option value="NE">Nebraska</option>
//     <option value="NV">Nevada</option>
//     <option value="NH">New Hampshire</option>
//     <option value="NJ">New Jersey</option>
//     <option value="NM">New Mexico</option>
//     <option value="NY">New York</option>
//     <option value="NC">North Carolina</option>
//     <option value="ND">North Dakota</option>
//     <option value="OH">Ohio</option>
//     <option value="OK">Oklahoma</option>
//     <option value="OR">Oregon</option>
//     <option value="PA">Pennsylvania</option>
//     <option value="RI">Rhode Island</option>
//     <option value="SC">South Carolina</option>
//     <option value="SD">South Dakota</option>
//     <option value="TN">Tennessee</option>
//     <option value="TX">Texas</option>
//     <option value="UT">Utah</option>
//     <option value="VT">Vermont</option>
//     <option value="VA">Virginia</option>
//     <option value="WA">Washington</option>
//     <option value="WV">West Virginia</option>
//     <option value="WI">Wisconsin</option>
//     <option value="WY">Wyoming</option>
//   </>
// );


export default function SignUp(props) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    // first_name: "",
    // last_name: "",
    // dob: "",
    // address: "",
    // city: "",
    // state: "",
    // zip: "",
  });
  const classes = styles();

  const signUpChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://cors-test-app.herokuapp.com/api/auth/signup",
        form
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch((err) => {
        document.getElementById("error-message").style.display = "block";
      });
  };
  return (
    <div className={classes.box} style={{ background: "#2196F3" }}>
      <h3 className={classes.h3}>Sign Up</h3>
      <form onSubmit={handleSubmit} className={classes.form}>
        <p id="error-message" style={{ display: "none", color: "red" }}>
          **Sorry the username and email must be unique**
        </p>
        <input
          className={classes.inputs}
          type="text"
          id="username"
          name="username"
          placeholder="Username (required)"
          value={form.username}
          onChange={signUpChange}
          required
        />
        <input
          className={classes.inputs}
          type="email"
          id="email"
          name="email"
          placeholder="Email (required)"
          value={form.email}
          onChange={signUpChange}
          required
        />
        <input
          className={classes.inputs}
          type="password"
          id="password"
          name="password"
          placeholder="Password (required)"
          value={form.password}
          onChange={signUpChange}
          required
        />
        {/* <input
          className={classes.inputs}
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First Name (required)"
          value={form.first_name}
          onChange={handleChange}
          required
        />
        <input
          className={classes.inputs}
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last Name (required)"
          value={form.last_name}
          onChange={handleChange}
          required
        />
        <input
          className={classes.inputs}
          type="date"
          id="dob"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
        />
        <input
          className={classes.inputs}
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <input
          className={classes.inputs}
          type="text"
          id="city"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
        <select
          className={classes.dropdown}
          onChange={handleChange}
          name="state"
          value={form.state}
        >
          {states}
        </select>
        <input
          className={classes.inputs}
          type="number"
          id="zip"
          name="zip"
          placeholder="Zip Code"
          value={form.zip}
          onChange={handleChange}
        /> */}
        <button className={classes.submit} style={{ background: "#8BC34A" }}>
          Submit
        </button>
      </form>
    </div>
  );
}
