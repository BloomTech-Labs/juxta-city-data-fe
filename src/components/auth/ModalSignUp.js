import React from "react";
import SignUp from "./SignUp";
import { Modal } from "semantic-ui-react";

const ModalSignUp = ({ modal, setModal, history }) => {
  return (
    <Modal
      dimmer="blurring"
      style={{
        backgroundColor: "#f8f8f8",
        width: "400px",
        border: "1px solid balck",
      }}
      open={modal}
      onClose={() => setModal(false)}
      onOpen={() => {
        console.log(modal, "modal in modal here");
        setModal(true);
      }}
    >
      <div style={{ margin: "30px 0", border: "1px solid balck" }}>
        <SignUp history={history}  onClose={() => setModal(false)}/>
      </div>
    </Modal>
  );
};

export default ModalSignUp;
