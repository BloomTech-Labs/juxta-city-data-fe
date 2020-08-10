import React,{useState, useContext} from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import ModalSignUp from "./ModalSignUp";
import ModalContext from "../../contexts/ModalContext";

const SignInInputs = ({ signInChange, handleSubmit, signInForm, history }) => {
  const { modal, setModal } = useContext(ModalContext); 
  const [secondmodal, setsecondModal] = useState(false);
  
 
  const handleModal = () =>{
  setModal(true);
  setsecondModal(true)
}

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
        <p> New with us? <a  id="register" onClick={handleModal}>Register!</a></p>
         <ModalSignUp modal={secondmodal} setModal={setModal} history={history}/>
           <Button
        style={{ backgroundColor: "#1890FF", color: "black", margin: "0 60px" }}>
        Sign In <Icon name="long arrow alternate right" />
      </Button>
    </Form>
  );
};

export default SignInInputs;
