import React from "react";
import SignUp from "./SignUp";
import { Modal } from "semantic-ui-react";

const ModalSignUp = ({ modal, setModal, history }) => {
  return (
    <Modal
      closeIcon
      dimmer="blurring"
      style={{
        backgroundColor: "#f8f8f8",
        width: "400px",
        border: "1px solid balck",
      }}
      open={modal}
      onClose={() => setModal(false)}
      onOpen={() => {
        setModal(true);
      }}
    >
      <div className="sign-in-up-modal">
        <SignUp history={history}  onClose={() => setModal(false)}/>
      </div>
    </Modal>
  );
};

export default ModalSignUp;
