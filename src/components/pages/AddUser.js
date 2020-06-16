import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../../functions/axiosWithAuth'
import jwt_decode from 'jwt-decode';


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
        setUserData({ ...userData })
        axiosWithAuth()
            .post(`https://production-juxta-city-be.herokuapp.com/api/profile/${userId}`, userData)
            .then((res) => {
                console.log(userData)
                setUserData(userData)
                props.history.push("/user_form")
                console.log(res.data);
            })
            .catch(err => {
                console.log("error", err);
            })
    };
/////////////////////////////////////////////////////////////
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
    }, [])

    console.log(profile);
    console.log(userData);
///////////////////////////////////////////////////////////////////
    return (
        <form 
            onSubmit={event => {
                // event.preventDefault()
                if (!userData.first_name || !userData.last_name) return

                handleSubmit(userData)
                setUserData(initialFormState)
            }}
        >
            <label>Email</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}/>
            <label>First Name</label>
            <input type="text" name="first_name" value={userData.first_name} onChange={handleChange}/>
            <label>Last Name</label>
            <input type="text" name="last_name" value={userData.last_name} onChange={handleChange}/>
            <label>Date Of Birth</label>
            <input type="text" name="dob" value={userData.dob} onChange={handleChange}/>
            <label>Address</label>
            <input type="text" name="address" value={userData.address} onChange={handleChange}/>
            <label>City</label>
            <input type="text" name="city" value={userData.city} onChange={handleChange}/>
            <label>State</label>
            <input type="text" name="state" value={userData.state} onChange={handleChange}/>
            <label>Zip</label>
            <input type="number" name="zip" value={userData.zip} onChange={handleChange}/>
            <button type="submit">Add new user</button>
        </form>
    )
}

export default AddUser