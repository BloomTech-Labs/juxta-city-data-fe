import React from 'react'

function AddUserForm({handleSubmit, addHandleChange, userData}) {
    return (
        <form onSubmit={handleSubmit} >
            <label>Email</label>
            <input type="text" name="email" value={userData.email} onChange={addHandleChange} />
            <label>First Name</label>
            <input type="text" name="first_name" value={userData.first_name} onChange={addHandleChange} />
            <label>Last Name</label>
            <input type="text" name="last_name" value={userData.last_name} onChange={addHandleChange} />
            <label>Date Of Birth</label>
            <input type="text" name="dob" value={userData.dob} onChange={addHandleChange} />
            <label>Address</label>
            <input type="text" name="address" value={userData.address} onChange={addHandleChange} />
            <label>City</label>
            <input type="text" name="city" value={userData.city} onChange={addHandleChange} />
            <label>State</label>
            <input type="text" name="state" value={userData.state} onChange={addHandleChange} />
            <label>Zip</label>
            <input type="number" name="zip" value={userData.zip} onChange={addHandleChange} />
            <button type="submit">Add new user</button>
        </form>
    )
}

export default AddUserForm
