import React  from "react";
import { Button, Form, Icon } from "semantic-ui-react";


const SignUpInputs = ({ signUpChange, handleSubmit, form }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <p id="error-message" style={{ display: "none", color: "red" }}>
        **The username and email must be unique** </p>
      <Form.Field>
        <input type="text" name="username" placeholder="Username"
          value={form.username} onChange={(event) => signUpChange(event)}required variant="outlined"/>
      </Form.Field>
      <Form.Field>
        <input type="email"  name="email" placeholder="E-mail address"
          value={form.email} onChange={(event) => signUpChange(event)}required variant="outlined" />
      </Form.Field>
      <Form.Field>
        <input type="password"  name="password" placeholder="Password"
          value={form.password} onChange={(event) => signUpChange(event)}required variant="outlined"/>
      </Form.Field>
      <Button style={{ backgroundColor: "#1890FF", color: "black", margin: "0 60px" }} >
        Register <Icon name="long arrow alternate right" />
      </Button>
    </Form>
  );
};

export default SignUpInputs;
