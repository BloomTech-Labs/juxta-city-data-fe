import React, {useState, useEffect} from "react"

const EditUser = props => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])


    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
        >
            <label>Email</label>
            <input type="text" name="email" value={user.email} onChange={handleInputChange} />
            <label>First Name</label>
            <input type="text" name="first_name" value={user.first_name} onChange={handleInputChange} />
            <label>Last Name</label>
            <input type="text" name="last_name" value={user.last_name} onChange={handleInputChange} />
            <label>Date Of Birth</label>
            <input type="text" name="dob" value={user.dob} onChange={handleInputChange} />
            <label>Address</label>
            <input type="text" name="address" value={user.address} onChange={handleInputChange} />
            <label>City</label>
            <input type="text" name="city" value={user.city} onChange={handleInputChange} />
            <label>State</label>
            <input type="text" name="state" value={user.state} onChange={handleInputChange} />
            <label>Zip</label>
            <input type="number" name="zip" value={user.zip} onChange={handleInputChange} />
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
      </button>
        </form>
    )
}

export default EditUser;
