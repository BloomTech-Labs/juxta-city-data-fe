import React from "react";
import SignIn from "./SignIn";
import { Modal } from "semantic-ui-react";

const ModalSignIn = ({ handleCloseModal, handleOpenModal, modalOpen, history}) => {

  return (
    <Modal
      dimmer="blurring"
      style={{
        backgroundColor: "#f8f8f8",
        width: "400px",
        border: "1px solid balck",
      }}
      open={modalOpen}
      onClose={handleCloseModal}
      onOpen={handleOpenModal}
    >
      <div style={{ margin: "30px 0", border: "1px solid balck" }} >
        <SignIn history={history} />
      </div>
    </Modal>
  );
};

export default ModalSignIn;
