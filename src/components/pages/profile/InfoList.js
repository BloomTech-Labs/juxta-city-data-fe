import React from 'react';
//import profileInfoStyle from "../profileStyles/profileInfoStyle";
import { deleteProfile } from '../../../functions';
import ImageUpload from './ImageUpload';
import profiledefault from '../../../assets/default.png';
import '../../../index.scss';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

const InfoList = ({ info, toggleEditing }) => {
  // const classes = profileInfoStyle();

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(!open);
  // };

  const deleteUserProfile = () => {
    deleteProfile(info.id).then(() => window.location.reload());
  };

  const dateOfBirthOld = new Date(info.dob);
  const dateNew = dateOfBirthOld.getDate();
  const monthNew = dateOfBirthOld.getMonth();
  const yearNew = dateOfBirthOld.getFullYear();
  const dateOfBirthNew = monthNew + 1 + '/' + dateNew + '/' + yearNew;

  return (
    <Card>
      <Image
        src={
          !((info.image_url === 'null') | (info.image_url === null))
            ? info.image_url
            : profiledefault
        }
        alt=''
        wrapped
        ui={false}
      />
      <ImageUpload info={info} />
      <Card.Content>
        <Card.Header>
          {info.first_name} {info.last_name}
        </Card.Header>
        <Card.Description> {info.username}</Card.Description>
        <Card.Meta>{info.email}</Card.Meta>
        <Card.Meta>{dateOfBirthNew}</Card.Meta>
        <Card.Description>
          <a>
            <Icon name='map marker alternate' />
          </a>
          {info.city}, {info.state} {info.zip}
        </Card.Description>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: '3px 0',
            justifyContent: 'space-around',
          }}
        >
          <Button className="info-btn" 
            style={{
              color: '#676767',
              background: 'transparent',
              border: '1px solid  #ddd',
              borderRadius: '7%',
            }}
            onClick={toggleEditing}
          >
            {/* <Icon name='edit' /> */}
            Edit Profile
          </Button>
          <Button className="info-btn"
            style={{
              color: '#676767',
              background: 'transparent',
              border: '1px solid  #ddd',
              borderRadius: '7%',
            }}
            onClick={deleteUserProfile}
          >
            {/* <Icon name='trash' /> */}
            Delete Profile
          </Button>
        </div>
      </Card.Content>
    </Card>

    // <Paper className={classes.paper} key={info.id}>
    //   <h2> {info.username}'s profile </h2>
    //   <List className={classes.root}>
    //     <ListItem>
    //       <img   src={
    //             !((info.image_url === "null") | (info.image_url === null))
    //               ? info.image_url
    //               : profiledefault
    //           } alt="" className={classes.large} />
    //     </ListItem>
    //     <ListItem>
    // <div >
    //   <div className="card-profile" key={info.id}>
    //     <div className="card-profile_img">
    //       <img src={info.image_url} alt="User profile" />
    //     </div>
    //     <div className="card-profile_user-info">
    //       <span className="infos_name">{info.username}</span>
    //       <ImageUpload info={info} />
    //     </div>

    //     <section className="user-list-section">
    //       <ul className="section-ul">
    //         {info.first_name ? (
    //           <li style={{ listStyle: "none" }}>
    //             <p>{info.first_name}</p>
    //           </li>
    //         ) : null}
    //         {info.last_name ? (
    //           <li style={{ listStyle: "none" }}>
    //             <p>{info.last_name}</p>
    //           </li>
    //         ) : null}
    //         <p>{info.email}</p>
    //         <p>{info.username}</p>
    //         {info.dob ? (
    //           <li style={{ listStyle: "none" }}>
    //             <p>{dateOfBirthNew}</p>
    //           </li>
    //         ) : null}
    //         <p>{info.address}</p>
    //         <li style={{ listStyle: "none" }}>
    //           <p>{info.city}</p>
    //           <p>{info.state} </p>
    //           <p>{info.zip}</p>
    //         </li>
    //       </ul>
    //       <div className="btn2-twins">
    //         <div>
    //           {" "}
    //           <button
    //             type="submit"

    //             className="btn-info"
    //             onClick={() => toggleEditing()}
    //           >
    //             Edit profile
    //           </button>
    //         </div>
    //         <div>
    //           {" "}
    //           <button
    //             type="submit"

    //             className="btn-info"
    //             onClick={() => deleteUserProfile()}
    //           >
    //             Delete User
    //           </button>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
  );
};
export default InfoList;
