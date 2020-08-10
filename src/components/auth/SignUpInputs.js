import React  from "react";
import { Button, Form, Icon } from "semantic-ui-react";


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

        {signInData.map((item)=>(
          <Form.Field>
          <input type={item.type} name={item.name} placeholder={item.name}  aria-label={item.name} 
            value={item.value}  onChange={(event) => signUpChange(event)}required variant="outlined"/>
        </Form.Field>
        ))}
      <Button style={{ backgroundColor: "#191969", color: "white", margin: "0 60px" }} >
        Register <Icon name="long arrow alternate right" />
      </Button>
    </Form>
  );
};

export default SignUpInputs;
