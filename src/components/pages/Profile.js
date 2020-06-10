import React, {useContext, useState} from "react";
import NavBar from "../Navbar.js";
//import SignIn from "../auth/SignIn"
import {UserContext} from "./UserContext"
import {axiosWithAuth} from "../../functions/axiosWithAuth.js"
import ProfileEdit from "./ProfileEdit"

export function Profile(props){

    const subjectData = [
      { id: props.id,
        email: props.email,
        first_name: props.first_name,
        last_name: props.last_name,
        dob: props.dob,
        address: props.address,
        city: props.city,
        state: props.state,
        zip: props.zip
      }
    ]

   
    const [userData, setUserData] = useState(subjectData);
    
    
    
  return (
<section>
      <NavBar {...props} />


    <div className="container">
        <h1>WELCOME</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add Your Info</h2>
          </div>
          <div className="flex-large">
            <h2>View & Edit</h2>
            <ProfileEdit userData={userData}/>
          </div>
        </div>
    </div>
        
</section>
    
  );
};

