import React from "react";
import SignUp from "./SignUp";
import { Modal } from "semantic-ui-react";

const ModalSignUp = ({ handleCloseModal, handleOpenModal, modalOpen, history}) => {

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
        <SignUp history={history} />
      </div>
    </Modal>
  );
};

export default ModalSignUp;