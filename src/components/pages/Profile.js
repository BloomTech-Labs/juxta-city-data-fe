import React, {useContext, useState} from "react";
import NavBar from "../Navbar.js";
import SignIn from "../auth/SignIn"
import {UserContext} from "./UserContext"
import axios from "axios"


export function Profile(props){
    const {userData, setUserData} = useContext(UserContext);
    const[user, setUser] = useState({});

    const token = localStorage.getItem('token');
    const options = {
    headers: { 'Authorization': token }
    };

     const getUserInfo = () => {
       axios
            .get(`https://production-juxta-city-be.herokuapp.com/api/users/$%7Bid%7D`, options)
            .then(res => {
                console.log(res.data);
                setUser(res.data);
          })
            .catch(err =>{
                  console.error('Error:', err);
          })

     }

      getUserInfo();

    // if(!profile){
    //   create profile
    // }else{
    //   update Profile
    // }
    // const {username, email, password, first_name, last_name, dob, address, city, state, zip} = user;
  return (
    <div>



      <NavBar {...props} />
      <h3>Welcome</h3>

      <section>
          {/* 
            Image Field to be placed here
          <img/>
          
        
          */}



        Username: {user.username}
        <br />
        Email: {user.email} <br />
        Password: {user.password}
        <br />
        First Name: {user.first_name}
        <br />
        Last Name: {user.last_name}
        <br />
        DOB: {user.dob}
        <br />
        Address: {user.address}
        <br />
        City: {user.city}
        <br />
        State: {user.state}
        <br />
        Zip: {user.zip}

        {/* Button for Image upload */}
      </section>
    </div>
  );
};

