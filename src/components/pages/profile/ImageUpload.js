import React, { useState } from 'react';
import { axiosWithAuth } from '../../../functions/axiosWithAuth';
import jwt_decode from 'jwt-decode';
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../../../index.scss"
const ImageUpload = ({ info }) => {
  const initialFormState = {
    image_url: null,
    cloudinary_id: null
  };

  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [uploadedFile, setUploadedFile] = useState(initialFormState);
  const [openDialog, setOpenDialog] = useState(false);

  const token = localStorage.getItem('token');
  const userId = jwt_decode(token).userid;
  const cloudinary_id = info.cloudinary_id;

  


  
  const onChange = (e) => {
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
        console.log(res.data, "res.data")
      })
      .then(() => window.location.reload())
      .catch((err) => {
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
      <button className="btn-info"  onClick={handleOpen}>
        Upload Image
      </button>
      <button  className="btn-info" onClick={handleRemove}>
        Remove Image
      </button>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Upload Image</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose an image to upload</DialogContentText>
          <input
            type='file'
            accept='image/x-png,image/jpeg'
            onChange={onChange}
          />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="btn-info" >
            Cancel
          </button>
          <button onClick={onSubmit} className="btn-info">
            Upload
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImageUpload;
