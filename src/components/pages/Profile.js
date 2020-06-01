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
    //   axios.get("", options).then(res => {
    //     setUser(res.data)
    //   })
    // }
  
  return (

  
<div>
      
      <h3>Welcome</h3>
      {/*UserName : {user.Name}*/}

  
        {/*<h2>{userData}</h2>
         <pre>{JSON.stringify(userData, null, 2)}</pre>
         {userData ? (
         */}
</div>
        //   <button
        //     onClick={() => {
        //       // call logout
        //       setUserData(null);
      
        //     }}
        //   >
        //     logout
        //   </button>
        // ) : (
        //     <button
        //       onClick = {async () => {
        //         const userData = await SignIn();
        //         setUserData(userData);
              
        //       }}
        //     >
        //       login
        //     </button>
        //   )}
  

  
   );
};

