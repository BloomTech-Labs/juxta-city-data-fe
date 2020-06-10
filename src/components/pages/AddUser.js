import React, { useState } from 'react'
import {axiosWithAuth} from '../../functions/axiosWithAuth'

const AddUser = props => {

    const initialFormState = { id: null, email: '', first_name: '', last_name: '', dob: '', address: '', city: '', state: '', zip: '' }
    const [userData, setUserData] = useState(initialFormState)
    const onChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
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
        <form 
            onSubmit={event => {
                event.preventDefault()
                if (!userData.firstName || !userData.lastName) return

                handleSubmit(userData)
                setUserData(initialFormState)
            }}
        >
            <label>Email</label>
            <input type="text" email="email" value={userData.email} onChange={onChange}/>
            <label>First Name</label>
            <input type="text" firstName="first_name" value={userData.first_name} onChange={onChange}/>
            <label>Last Name</label>
            <input type="text" lastName="last_name" value={userData.last_name} onChange={onChange}/>
            <label>Date Of Birth</label>
            <input type="text" dob="dob" value={userData.dob} onChange={onChange}/>
            <label>Address</label>
            <input type="text" address="address" value={userData.address} onChange={onChange}/>
            <label>City</label>
            <input type="text" city="city" value={userData.city} onChange={onChange}/>
            <label>State</label>
            <input type="text" state="state" value={userData.state} onChange={onChange}/>
            <label>Zip</label>
            <input type="number" zip="zip" value={userData.zip} onChange={onChange}/>
            <button>Add new user</button>
        </form>
    )
}

export default AddUser