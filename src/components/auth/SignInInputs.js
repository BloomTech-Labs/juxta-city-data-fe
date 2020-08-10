import React, { useState, useContext } from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import ModalSignUp from "./ModalSignUp";
import ModalContext from "../../contexts/ModalContext";


const SignInInputs = ({ signInChange, handleSubmit, signInForm, history }) => {
  const { modal, setModal } = useContext(ModalContext);
  const [secondmodal, setsecondModal] = useState(false);

  const handleModal = () => {
    setModal(true);
    setsecondModal(true);
  };

  const signUpData = [
    { type: "text", name: "username", value: signInForm.username },
    { type: "password", name: "password", value: signInForm.password },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <p id="signin-error" style={{ display: "none", color: "red" }}> Sorry User Not Found </p>
      {signUpData.map((inputField) => (
        <Form.Field> <input type={inputField.type} name={inputField.name} placeholder={inputField.name} aria-label={inputField.name}
            value={inputField.value} onChange={(event) => signInChange(event)} required />
        </Form.Field>
      ))}

      <p> New with us?<a id="register" onClick={handleModal}> Register!</a></p>
      <ModalSignUp modal={secondmodal} setModal={setModal} history={history} />
      <Button style={{ backgroundColor: "#191969", color: "white", margin: "0 60px" }} >
        Sign In <Icon name="long arrow alternate right" /> </Button>
    </Form>
  );
};

export default SignInInputs;
