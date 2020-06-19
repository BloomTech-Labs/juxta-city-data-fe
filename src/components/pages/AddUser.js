import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode';
import AddUserForm from './AddUserForm';
import { addUserRequest, getUserData } from '../../functions';


const AddUser = props => {
    const token = localStorage.getItem('token');
    const userId = jwt_decode(token).userid;

    const initialFormState = {
      address: "",
      city: "",
      dob: "",
      email: "",
      first_name: "",
      last_name: "",
      state: "",
      zip: "",
    };

    const [userData, setUserData] = useState(initialFormState)

    const addHandleChange = e => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    const [profile, setProfile] = useState({})

    const handleSubmit = e => {
        e.preventDefault();
       addUserRequest(userData, userId)
        setUserData(userId)
    };

    useEffect(()=>{
        getUserData(userId)
        //setProfile("res.data");
    }, [userId])


    return (
       <AddUserForm userData={userData} handleSubmit={handleSubmit} addHandleChange={addHandleChange}/>
    )
}

export default AddUser