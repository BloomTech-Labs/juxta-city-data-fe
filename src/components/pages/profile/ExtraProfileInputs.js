import React from "react";
 import SelectState from "./SelectState";
import { Form, Button} from "semantic-ui-react";

function ExtraProfileInputs({ handleSubmit, addHandleChange}) {

    const inputData=[ {type:"text", name:"first_name", placeholder:"First Name"},
        {type:"text", name:"last_name", placeholder:"Last Name"},
        {type:"date", name:"dob", placeholder:"Birthdate"},
        {type:"text", name:"address", placeholder:"Address"},
        {type:"text", name:"city", placeholder:"City"},
        {type:"number", name:"zip", placeholder:"Zip code"}];

    return (
        <div style={{ marginTop:"15px",textAlign:"center"}}>
            <h1>Add Profile</h1>
            <div className="extra-profile">
                <Form onSubmit={handleSubmit} size="big">
                    {inputData.map((item, index)=>(
                         <Form.Field key={index} >
                         <input type={item.type} name={item.name} placeholder={item.placeholder} aria-label={item.placeholder} onChange={addHandleChange}  />
                     </Form.Field>
                    ))}
                    <Button type="submit"  aria-hidden='false' style={{ backgroundColor: '#0074cc', color: 'white' }}>Add profile</Button>
                </Form>
            </div>
        </div>
    );
}
export default ExtraProfileInputs;