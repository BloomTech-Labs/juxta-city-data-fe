import React from "react";
//import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//import SelectState from "./SelectState";
//import TextField from "@material-ui/core/TextField";
import formStyles from "../profileStyles/formStyles";
//import { Link } from 'react-router-dom'
import "../../../components/css/neumorphism.css";

function EditProfileInputs({ handleSubmit, addHandleChange, userData }) {
  const classes = formStyles();

  if(userData){
    return (
      <Grid item xs={6}>
      
          <div class="card bg-primary shadow-soft border-light mb-5 text-center">
          <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
           <div class="form-group mb-3">
              <label for="first_name">First Name</label>
              <input type="text" class="form-control" defaultValue={userData.first_name} name="first_name" onChange={addHandleChange} aria-describedby="first_name" />
           </div>
            <div class="form-group mb-3">
              <label for="last_name">Last Name</label>
              <input type="text"  class="form-control" defaultValue={userData.last_name} name="last_name" onChange={addHandleChange} aria-describedby="last_name"/>
            </div>
            <div class="form-group mb-3">
              <label for="dob">Date of birth</label>
              <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><span class="far fa-calendar-alt"></span></span>
                  </div>
                  <input class="form-control datepicker" id="dob" placeholder="Your B-DAY!" type="date" name="dob" defaultValue={userData.dob} onChange={addHandleChange} aria-label="date of birth"/>
              </div>
            </div>
          <div class="form-group mb-3">
              <label for="address">Address</label>
             <input type="text" class="form-control" defaultValue={userData.address} name="address" onChange={addHandleChange} aria-describedby="address"/>
          </div>
          <div class="form-group mb-3">
            <label for="city">City</label>
            <input type="text"  class="form-control" defaultValue={userData.city} name="city" onChange={addHandleChange} aria-describedby="city"/>
          </div>
            <div class="form-group">
              <label class="my-1 mr-2" for="inlineFormCustomSelectPref">State</label>
              <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
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

            <div class="form-group mb-3">
              <label for="Zip Code">Zip Code</label>
             <input type="number" class="form-control" defaultValue={userData.zip} name="zip" onChange={addHandleChange} />
            </div>
            <Button type="submit" className="btn btn-sm btn-primary">Edit Profile</Button>
          </form>
         </div>
  
      </Grid>
    );
  }else{
    return(
      <h1>loading profile data...</h1>
    )
  }
}
export default EditProfileInputs;
