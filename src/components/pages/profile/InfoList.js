import React from 'react';
import { deleteProfile } from '../../../functions';
import ImageUpload from './ImageUpload';
import profiledefault from '../../../assets/default.png';
import '../../../index.scss';
import { Card, Icon, Image } from 'semantic-ui-react';

const InfoList = ({ info, toggleEditing }) => {
  
  const deleteUserProfile = () => {
    deleteProfile(info.id).then(() => window.location.reload());
  };

  const dateOfBirthOld = new Date(info.dob);
  const dateNew = dateOfBirthOld.getDate();
  const monthNew = dateOfBirthOld.getMonth();
  const yearNew = dateOfBirthOld.getFullYear();
  const dateOfBirthNew = monthNew + 1 + '/' + dateNew + '/' + yearNew;

  return (
    <Card style={{marginTop:"20px"}}>
      <Image
        src={!((info.image_url === 'null') | (info.image_url === null)) ? info.image_url : profiledefault}
        alt=''  wrapped ui={false} />
      <ImageUpload info={info} />
      <Card.Content>
        <Card.Header> {info.first_name} {info.last_name} </Card.Header>
        <Card.Description> {info.username}</Card.Description>
        <Card.Meta>{info.email}</Card.Meta>
        <Card.Meta>{dateOfBirthNew}</Card.Meta>
        <Card.Description>
          <Icon name='map marker alternate' color='blue' />
          {info.city}, {info.state} {info.zip}
        </Card.Description>
        <div className='info-btn-wrapper'>
          <button className="info-btn" onClick={toggleEditing} >
            {/* <Icon name='edit' /> */}
            Edit Profile </button>
          <button className="info-btn" onClick={deleteUserProfile} >
            {/* <Icon name='trash' /> */}
            Delete Profile</button>
        </div>
      </Card.Content>
    </Card>
  );
};
export default InfoList;
