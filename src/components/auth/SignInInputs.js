import React, { useState, useContext } from "react";
import { Form} from "semantic-ui-react";
import ModalSignUp from "./ModalSignUp";
import SubmitButton from "./SubmitBotton";
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
      {signUpData.map((inputField, index) => (
        <Form.Field key={index}> <input  type={inputField.type} name={inputField.name} placeholder={inputField.name} aria-label={inputField.name}
            value={inputField.value} onChange={(event) => signInChange(event)} required />
        </Form.Field>
      ))}

      <p style={{textAlign:"center"}}> New with us?<a id="register" onClick={handleModal}> Register!</a></p>
      
      <ModalSignUp modal={secondmodal} setModal={setModal} history={history} />
      <SubmitButton title = "Sign In"/>
    </Form>
  );
};

export default SignInInputs;
