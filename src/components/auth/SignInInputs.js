import React,{useState} from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
 import ModalSignUp from "./ModalSignUp";

const SignInInputs = ({ signInChange, handleSubmit, signInForm}) => {
  const [modalOpen, setModalSatae] = useState(false);

  const handleOpenModal = () => setModalSatae(true);

  const handleCloseModal = () => setModalSatae(false);
  const history =useHistory();

  console.log(modalOpen,"modalOpen")
  return (
    <Form onSubmit={handleSubmit} >
        <p id="signin-error" style={{ display: "none", color: "red" }} >
        Sorry User Not Found </p>
        <Form.Field>
        <input type="text" name="username" placeholder="Username" aria-label="Username"
        value={signInForm.username} onChange={(event)=>signInChange(event)} required
        />
        </Form.Field>
      <Form.Field>
        <input type="password" name="password" placeholder="Password" aria-label="Password"
        value={signInForm.password} onChange={(event)=>signInChange(event)} required
        />
        </Form.Field>
        <p> New with us? <a  id="register" onClick={handleOpenModal}>Register!</a></p>
         <ModalSignUp modalOpen={modalOpen} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} history={history}/>
           <Button
        style={{ backgroundColor: "#1890FF", color: "black", margin: "0 60px" }}>
        Sign In <Icon name="long arrow alternate right" />
      </Button>
    </Form>
  );
};

export default SignInInputs;
