import React from "react";
import SignIn from "./SignIn";
import { Modal } from "semantic-ui-react";

const ModalSignIn = ({ modal, setModal, history }) => {
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
      onOpen={() => setModal(true)}
    >
      <div className="sign-in-up-modal">
        <SignIn history={history} />
      </div>
    </Modal>
  );
};

export default ModalSignIn;
