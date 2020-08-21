import React, { useState } from 'react';
import { axiosWithAuth } from '../../../functions/axiosWithAuth';
import jwt_decode from 'jwt-decode';
import '../../../index.scss';
import { Icon, Button, Modal } from 'semantic-ui-react';

const ImageUpload = ({ info }) => {
  const initialFormState = {
    image_url: null,
    cloudinary_id: null,
  };

  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [uploadedFile, setUploadedFile] = useState(initialFormState);
  const [openDialog, setOpenDialog] = useState(false);

  const token = localStorage.getItem('token');
  const userId = jwt_decode(token).userid;
  const cloudinary_id = info.cloudinary_id;

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    axiosWithAuth()
      .put(
        `https://production-juxta-city-be.herokuapp.com/api/profile/${userId}/profile_image`,
        formData
      )
      .then((res) => {
        setUploadedFile(res.data);
        console.log(res.data, 'res.data');
      })
      .then(() => window.location.reload())
      .catch(err => {
        console.log('error', err);
      });
  };

  const handleRemove = () => {
    axiosWithAuth()
      .put(
        `https://production-juxta-city-be.herokuapp.com/api/profile/${userId}/profile_image/${cloudinary_id}`
      )
      .then(() => {
        setUploadedFile(initialFormState);
      })
      .then(() => window.location.reload())
      .catch((err) => {
        console.log('error', err);
      });
  };

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <div className='info-btn-wrapper' >
        <div>
          <button className='info-btn'onClick={handleOpen} >
            <Icon name='cloud upload' /> Upload
          </button >
        </div>
        <div>
          <button className='info-btn' onClick={handleRemove} >
            <Icon name='trash' /> Delete
          </button >
        </div>
      </div>

      <Modal size='mini' open={openDialog} onClose={handleClose}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <Modal.Header >Choose an image to upload</Modal.Header>
          <input type='file' accept='image/x-png,image/jpeg' onChange={onChange} />
          <div style={{ marginTop:'10px'}}>
         <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmit} style={{ backgroundColor: '#0074cc', color: 'white' }} >
            Upload </Button>
         </div>
        </Modal.Content>
        {/* <Modal.Actions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmit} style={{ backgroundColor: '#0074cc', color: 'white' }} >
            Upload </Button>
        </Modal.Actions> */}
      </Modal>
    </div>
  );
};

export default ImageUpload;
