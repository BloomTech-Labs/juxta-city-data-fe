import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../../functions/axiosWithAuth'
import jwt_decode from 'jwt-decode';
import AddUserForm from './AddUserForm';


const AddUser = props => {
    const token = localStorage.getItem('token');
    const userId = jwt_decode(token).userid;

    const initialFormState = { id: null, email: '', first_name: '', last_name: '', dob: '', address: '', city: '', state: '', zip: '' }
    const [userData, setUserData] = useState(initialFormState)
    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const [profile, setProfile] = useState({})////////////////////////NEW GET DATA//////////////

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`https://production-juxta-city-be.herokuapp.com/api/profile/${userId}`, userData)
            .then((res) => {
                props.history.push("/user_form")
            })
            .catch(err => {
                console.log("error", err);
            })
    };

    useEffect(()=>{
    axiosWithAuth()
        .get(`https://production-juxta-city-be.herokuapp.com/api/profile/${userId}`)
        .then(res => {
            console.log("SENT USER RETURNS!", res.data)
            setProfile(res.data);
        })
        .catch(err => {
            console.log("Somethings Up!", err);
        })
    }, [userId])


///////////////////////////////////////////////////////////////////
    return (
       <AddUserForm userData={userData} handleSubmit={handleSubmit} handleChange={handleChange}/>
    )
}

export default AddUser