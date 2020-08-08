import React,{useState} from "react";
import { Button, Form, Modal, Icon } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import SignUp from "./SignUp";

const SignInInputs = ({ signInChange, handleSubmit, signInForm }) => {
  const [modalOpen, setModalSatae] = useState(false);

  const handleOpenModal = () => setModalSatae(true);

  const handleCloseModal = () => setModalSatae(false);
  const history =useHistory();
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
        <p> New with us? <Link onClick={handleOpenModal}>Register!</Link></p>

            <Modal dimmer="blurring"  style ={{ backgroundColor:"#f8f8f8", width:"400px", border:"1px solid balck"}} open={modalOpen} onClose={handleCloseModal}>
           <div style ={{ margin:"30px 0",border:"1px solid balck"}} >
           <SignUp history={history}/>
           </div>
            </Modal>


      <Button
        style={{ backgroundColor: "#1890FF", color: "black", margin: "0 60px" }}>
        Sign In <Icon name="long arrow alternate right" />
      </Button>
    </Form>
  );
};

export default SignInInputs;
