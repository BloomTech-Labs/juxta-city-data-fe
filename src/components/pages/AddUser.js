import React, { useState } from 'react'

const AddUserForm = props => {
    return (
        <form>
            <label>Email</label>
            <input type="text" email="email" value="" />
            <label>First Name</label>
            <input type="text" firstName="first_name" value="" />
            <label>Last Name</label>
            <input type="text" lastName="last_name" value=""/>
            <label>Date Of Birth</label>
            <input type="text" dob="dob" value=""/>
            <label>Address</label>
            <input type="text" address="address" value=""></input>
            <label>City</label>
            <input type="text" city="city" value=""></input>
            <label>State</label>
            <input type="text" state="state" value=""></input>
            <label>Zip</label>
            <input type="number" zip="zip" value=""></input>
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm