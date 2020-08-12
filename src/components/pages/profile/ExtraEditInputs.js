import React from "react";
// import SelectState from "./SelectState";
import { Form, Button} from "semantic-ui-react";

function ExtraEditInputs({ handleSubmit, addHandleChange, userData}) {
    console.log(userData,"userdata")
    if(userData){
    return (
        <div style={{ marginTop:"15px",textAlign:"center"}}>
            <h1>Edit your profile</h1>
            <div className="extra-profile">
                <Form onSubmit={handleSubmit} size="big">
                    <Form.Field> <input type="text" defaultValue={userData.first_name}  aria-label="First Name" name="first_name" onChange={addHandleChange} /> </Form.Field>
                    <Form.Field> <input type="text" defaultValue={userData.last_name} aria-label="Last Name" name="last_name" onChange={addHandleChange}/> </Form.Field>
                    <Form.Field> <input type="date"  aria-label="Birthdate" name="dob" defaultValue={userData.dob} onChange={addHandleChange}  /> </Form.Field>
                    <Form.Field> <input type="text"  aria-label="Address" name="address" defaultValue={userData.address} onChange={addHandleChange}  /></Form.Field>
                    <Form.Field> <input type="text" aria-label="City" name="city" defaultValue={userData.city} onChange={addHandleChange} /> </Form.Field>
                    <Form.Field><input type="number" aria-label="Zip code" name="zip" defaultValue={userData.zip} onChange={addHandleChange}/> </Form.Field>                 
                    <Button type="submit"  aria-hidden='false' style={{ backgroundColor: '#0074cc', color: 'white' }}>Save changes</Button>
                </Form>
            </div>
        </div>);
    }else{
        return(
        <h1>loading profile data...</h1>
        )
    }
}
export default ExtraEditInputs;