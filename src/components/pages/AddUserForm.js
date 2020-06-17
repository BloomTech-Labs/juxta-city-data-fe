import React from 'react'

function AddUserForm({handleSubmit, handleChange, userData}) {
    return (
        <form onSubmit={handleSubmit} >
            <label>Email</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange} />
            <label>First Name</label>
            <input type="text" name="first_name" value={userData.first_name} onChange={handleChange} />
            <label>Last Name</label>
            <input type="text" name="last_name" value={userData.last_name} onChange={handleChange} />
            <label>Date Of Birth</label>
            <input type="text" name="dob" value={userData.dob} onChange={handleChange} />
            <label>Address</label>
            <input type="text" name="address" value={userData.address} onChange={handleChange} />
            <label>City</label>
            <input type="text" name="city" value={userData.city} onChange={handleChange} />
            <label>State</label>
            <input type="text" name="state" value={userData.state} onChange={handleChange} />
            <label>Zip</label>
            <input type="number" name="zip" value={userData.zip} onChange={handleChange} />
            <button type="submit">Add new user</button>
        </form>
    )
}

export default AddUserForm
