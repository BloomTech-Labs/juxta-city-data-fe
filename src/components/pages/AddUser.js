import React, { useState } from 'react'
import {axiosWithAuth} from '../../functions/axiosWithAuth'



const AddUser = props => {

    const initialFormState = { id: null, email: '', first_name: '', last_name: '', dob: '', address: '', city: '', state: '', zip: '' }
    const [userData, setUserData] = useState(initialFormState)
    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setUserData({ ...userData })
        axiosWithAuth()
            .post(`https://production-juxta-city-be.herokuapp.com/api/users/${userData}`, userData)
            .then((res) => {
                setUserData(userData)
                props.history.push("/user_form")
                console.log(res.data);
            })
            .catch(err => {
                console.log("error", err);
            })
    };

    return (
        <form 
            onSubmit={event => {
                event.preventDefault()
                if (!userData.firstName || !userData.lastName) return

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
            <button>Add new user</button>
        </form>
    )
}

export default AddUser