import React, {useContext, useState} from "react";
import NavBar from "../Navbar.js";
import SignIn from "../auth/SignIn"
import {UserContext} from "./UserContext"
import axios from "axios"


export function Profile(props){
    const {userData, setUserData} = useContext(UserContext);
    const[user, setUser] = useState(null);

    const token = localStorage.getItem('token');
    const options = {
    headers: { 'Authorization': token }
    };

    // const getUserInfo = () => {
    //   axios.get(`https://production-juxta-city-be.herokuapp.com/api/users/$%7Bid%7D`, options).then(res => {
    //     setUser(res.data)
    //   })
    // }

    // if(!profile){
    //   create profile
    // }else{
    //   update Profile
    // }
  
  return (

  
<div>
      
      <h3>Welcome</h3>
      {/*UserName : {user.Name}*/}

  
</div>
  
   );
};

