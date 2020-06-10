import React, {useState, useEffect} from "react";
import NavBar from "../Navbar.js";
//import SignIn from "../auth/SignIn"
//import {UserContext} from "./UserContext"
import {axiosWithAuth} from "../../functions/axiosWithAuth.js"
import ProfileEdit from "./ProfileEdit"
import AddUser from "./AddUser.js";

export function Profile(props){

    const [userInfo, setUserInfo] = useState([]);

    useEffect(()=>{
      axiosWithAuth()
        .get("/api/users")
        .then(res =>{
            console.log("Other Users!", res.data)
            setUserInfo(res.data);
        })
        .catch(err => {
            console.log("Somethings Up!", err);
        })
    }, [])

   
    

    
    
    
  return (
<section>
      <NavBar {...props} />


    <div className="container">
        <h1>WELCOME</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add Your Info</h2>
            <AddUser handleSubmit={props.handleSubmit}/>
          </div>
          <div className="flex-large">
            <h2>View & Edit</h2>
            <ProfileEdit userData={userInfo}/>
          </div>
        </div>
    </div>
        
</section>
    
  );
};

