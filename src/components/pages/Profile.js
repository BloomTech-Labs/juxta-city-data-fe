import React, {useState, useEffect} from "react";
import NavBar from "../Navbar.js";
//import SignIn from "../auth/SignIn"
import {axiosWithAuth} from "../../functions/axiosWithAuth.js"
import UserTable from "./UserTable"
import AddUser from "./AddUser.js";
import Container from '@material-ui/core/Container';



export function Profile(props){


    const [userData, setUserData] = useState([]);

    const deleteUser = id => {
      setUserData(userData.filter(i => i.id !== id))
    }

   
    useEffect(()=>{
      axiosWithAuth()
        .get(`/apihttps://production-juxta-city-be.herokuapp.com/api/users/${userData}/users`)
        .then(res =>{
            console.log("Other Users!", res.data)
            setUserData(res.data);
        })
        .catch(err => {
            console.log("Somethings Up!", err);
        })
    }, [userData])

   
    
  return (
<section>
      <NavBar {...props} />

     
    <Container maxWidth="lg">
        <h1>WELCOME</h1>
        
            <h2>Add Your Info</h2>
            <AddUser {...props} newUser={setUserData} />
         
            <h2>View & Edit</h2>
            <UserTable {...props} userData={userData} deleteUser={deleteUser}/>
         
       
    </Container>
  
        
</section>
    
  );
};

