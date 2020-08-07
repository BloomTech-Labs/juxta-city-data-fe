import React,{useState}  from "react";
import { Button, Form, Icon, Modal } from "semantic-ui-react";
import { Link ,useHistory} from "react-router-dom";
import SignIn from "./SignIn";

const SignUpInputs = ({ signUpChange, handleSubmit, form }) => {
  const [modalOpen, setModalSatae] = useState(false);

  const handleOpenModal = () => setModalSatae(true);

  const handleCloseModal = () => setModalSatae(false);
  const history =useHistory();
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

      <p> Already have an account? <Link onClick={handleOpenModal}>Sign in!</Link></p>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <SignIn history={history} />
      </Modal>
      <Button style={{ backgroundColor: "#1890FF", color: "black", margin: "0 60px" }} >
        Register <Icon name="long arrow alternate right" />
      </Button>
    </Form>
  );
};

export default SignUpInputs;
