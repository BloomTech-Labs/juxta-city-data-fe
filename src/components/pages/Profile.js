import React, {useContext, useState} from "react";
import NavBar from "../Navbar.js";
//import SignIn from "../auth/SignIn"
import {UserContext} from "./UserContext"
import {axiosWithAuth} from "../../functions/axiosWithAuth.js"


export function Profile(props){
    const {id} = props.req.params;
    const {userData, setUserData} = useContext(UserContext);
    const[user, setUser] = useState({
      id: null,
      email: "",
      first_name: "",
      last_name: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      zip: ""

    });

    const onChange = e => {
      setUserData({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
      e.preventDefault();
      setUser({...user})
      axiosWithAuth()
        .post('/api/users', user)
        .then((res)=>{
            setUser(user)
            props.history.push("/user_form")
            console.log(res.data);
        })
        .catch(err =>{
          console.log("error", err);
        })
    };
    //https://production-juxta-city-be.herokuapp.com/api/users/$%7Bid%7D
    //const token = localStorage.getItem('token');
    // const options = {
    // headers: { 'Authorization': token }
    // };

     const getUserInfo = () => {

      setTimeout(() => {

       axiosWithAuth()
            .get(`/api/users/${id}`, userData)
            .then(res => {
                console.log(res.data);
                setUserData(res.data);
          })
            .catch(err =>{
                  console.error('Error:', err);
          })

      }, [3000]);

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

      <form>
          {/* 
            Image Field to be placed here
          <img/>
          
        
          */}

       
        Email: {user.email} <br />
        
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
      </form>
    </div>
  );
};

