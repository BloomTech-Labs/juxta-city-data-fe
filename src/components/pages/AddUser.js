import React, { useState } from 'react'
import axiosWithAuth from '../../functions/axiosWithAuth'

const AddUser = props => {

    const initialFormState = { id: null, email: '', firstName: '', lastName: '', dob: '', address: '', city: '', state: '', zip: '' }
    const [userData, setUserData] = useState(initialFormState)

    const onChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleInputChange = e => {
        e.preventDefault();
        setUserData({ ...userData })
        axiosWithAuth()
            .post('/api/users', userData)
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
        <form>
            <label>Email</label>
            <input type="text" email="email" value={userData.email} onChange={handleInputChange}/>
            <label>First Name</label>
            <input type="text" firstName="first_name" value={userData.firstName} onChange={handleInputChange}/>
            <label>Last Name</label>
            <input type="text" lastName="last_name" value={userData.lastName} onChange={handleInputChange}/>
            <label>Date Of Birth</label>
            <input type="text" dob="dob" value={userData.dob} onChange={handleInputChange}/>
            <label>Address</label>
            <input type="text" address="address" value={userData.address} onChange={handleInputChange}/>
            <label>City</label>
            <input type="text" city="city" value={userData.city} onChange={handleInputChange}/>
            <label>State</label>
            <input type="text" state="state" value={userData.state} onChange={handleInputChange}/>
            <label>Zip</label>
            <input type="number" zip="zip" value={userData.zip} onChange={handleInputChange}/>
            <button>Add new user</button>
        </form>
    )
}

export default AddUser