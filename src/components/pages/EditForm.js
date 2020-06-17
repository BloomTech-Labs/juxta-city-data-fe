import React from 'react'



function EditForm({handleSubmit, handleInputChange, user, setEditing}) {
    const { email, first_name, last_name, dob, address, city, state, zip } = user
    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="text" name="email" value={email} onChange={handleInputChange} />
            <label>First Name</label>
            <input type="text" name="first_name" value={first_name} onChange={handleInputChange} />
            <label>Last Name</label>
            <input type="text" name="last_name" value={last_name} onChange={handleInputChange} />
            <label>Date Of Birth</label>
            <input type="text" name="dob" value={dob} onChange={handleInputChange} />
            <label>Address</label>
            <input type="text" name="address" value={address} onChange={handleInputChange} />
            <label>City</label>
            <input type="text" name="city" value={city} onChange={handleInputChange} />
            <label>State</label>
            <input type="text" name="state" value={state} onChange={handleInputChange} />
            <label>Zip</label>
            <input type="number" name="zip" value={zip} onChange={handleInputChange} />
            <button>Update user</button>
            <button onClick={() => setEditing(false)} className="button muted-button">
                Cancel
      </button>
        </form>
    )
}

export default EditForm
