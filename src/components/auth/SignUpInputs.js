import React  from "react";
import { Form } from "semantic-ui-react";
import SubmitButton from "./SubmitBotton";


const SignUpInputs = ({ signUpChange, handleSubmit, form }) => {
const signInData =[
  {type:"text", name:"username",value: form.username },
  {type:"email", name:"email", value: form.email },
  {type:"password", name:"password", value: form.password }
]

  return (
    <Form onSubmit={handleSubmit}>
      <p id="error-message" style={{ display: "none", color: "red" }}>
       Please add a unique username and password</p>

        {signInData.map((item,index)=>(
          <Form.Field key={index}>
          <input type={item.type} name={item.name} placeholder={item.name}  aria-label={item.name} 
            value={item.value}  onChange={(event) => signUpChange(event)}required variant="outlined"/>
        </Form.Field>
        ))}
        <SubmitButton title= "Register"/>
    </Form>
  );
};

export default SignUpInputs;
