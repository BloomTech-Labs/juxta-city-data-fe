import React, {useState, useEffect} from "react";
import NavBar from "../Navbar.js";
//import SignIn from "../auth/SignIn"
import {axiosWithAuth} from "../../functions/axiosWithAuth.js"
import UserTable from "./UserTable"
import AddUser from "./AddUser.js";

export function Profile(props){

    const [userData, setUserData] = useState([]);

    const deleteUser = id => {
      setUserData(userData.filter(i => i.id !== id))
    }

   

    useEffect(()=>{
      axiosWithAuth()
        .get("/api/users")
        .then(res =>{
            console.log("Other Users!", res.data)
            setUserData(res.data);
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
            <AddUser {...props} newUser={setUserData} />
          </div>
          <div className="flex-large">
            <h2>View & Edit</h2>
            <UserTable {...props} userData={userData} deleteUser={deleteUser}/>
          </div>
        </div>
    </div>
  
        
</section>
    
  );
};

