import React, { useContext, useState } from "react";
import { deleteProfile } from "../../../functions";
import ImageUpload from "./ImageUpload";
import profiledefault from "../../../assets/default.png";
import "../../../index.scss";
import { Card, Icon, Image } from "semantic-ui-react";
import ModalEditProfile from "./ModalEditProfile";
import ModalContext from "../../../contexts/ModalContext";
import ModalDeleteProfile from "./ModalDeleteProfile";

const InfoList = ({ info }) => {
  const [openDel, setOpenDel] = useState(false);
  const { modal, setModal } = useContext(ModalContext);

  const deleteUserProfile = () => {
    deleteProfile(info.id).then(() => window.location.reload());
    localStorage.setItem("profilePicture", null);
  };

  const dateOfBirthOld = new Date(info.dob);
  const dateNew = dateOfBirthOld.getDate();
  const monthNew = dateOfBirthOld.getMonth();
  const yearNew = dateOfBirthOld.getFullYear();
  const dateOfBirthNew = monthNew + 1 + "/" + dateNew + "/" + yearNew;

  return (
    <Card style={{ marginTop: "20px" }}>
      <Image
        src={
          !((info.image_url === "null") | (info.image_url === null))
            ? info.image_url
            : profiledefault
        }
        alt=""
        wrapped
        ui={false}
      />
      <ImageUpload info={info} />
      <Card.Content>
        <Card.Header>
          {" "}
          {info.first_name} {info.last_name}{" "}
        </Card.Header>
        <Card.Description> {info.username}</Card.Description>
        <Card.Meta>{info.email}</Card.Meta>
        <Card.Meta>{dateOfBirthNew}</Card.Meta>
        <Card.Description>
          <Icon name="map marker alternate" color="blue" />
          {info.city}, {info.state} {info.zip}
        </Card.Description>
        <div className="info-btn-wrapper">
          <button className="info-btn" onClick={() => setModal(true)}>
            {/* <Icon name='edit' /> */}
            Edit Profile{" "}
          </button>
          <ModalEditProfile modal={modal} setModal={setModal} />
          <button className="info-btn" onClick={() => setOpenDel(true)}>
            {/* <Icon name='trash' /> */}
            Delete Profile
          </button>
          <ModalDeleteProfile
            deleteUserProfile={deleteUserProfile}
            openDel={openDel}
            setOpenDel={setOpenDel}
          />
        </div>
      </Card.Content>
    </Card>
  );
};
export default InfoList;
