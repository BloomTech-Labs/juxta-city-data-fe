import React from "react";
import { Button, Form,  Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignInInputs = ({ signInChange, handleSubmit, signInForm }) => {

  return (
    <Form onSubmit={handleSubmit} >
        <p id="signin-error" style={{ display: "none", color: "red" }} >
        Sorry User Not Found </p>
        <Form.Field>
        <input type="text" name="username" placeholder="Username"
        value={signInForm.username} onChange={(event)=>signInChange(event)} required
        />
        </Form.Field>
      <Form.Field>
        <input type="password" name="password" placeholder="Password"
        value={signInForm.password} onChange={(event)=>signInChange(event)} required
        />
        </Form.Field>
        <p> New with us? <Link to="/">Register!</Link></p>
      <Button
        style={{ backgroundColor: "#1890FF", color: "black", margin: "0 60px" }}>
        Sign In <Icon name="long arrow alternate right" />
      </Button>
    </Form>
  );
};

export default SignInInputs;
