import React, {useState, useEffect} from "react";
import NavBar from "../Navbar.js";
//import SignIn from "../auth/SignIn"
import {axiosWithAuth} from "../../functions/axiosWithAuth.js"
import UserTable from "./UserTable"
import AddUser from "./AddUser.js";
import Container from '@material-ui/core/Container';
import EditUser from './EditUser'
import jwt_decode from 'jwt-decode';


export function Profile(props){
  const token = localStorage.getItem('token');
  const userId = jwt_decode(token).userid;
  console.log(token)
  console.log(userId)

  // const initialFormState = { id: null, email: '', first_name: '', last_name: '', dob: '', address: '', city: '', state: '', zip: '' }
  // const [currentUser, setCurrentUser] = useState(initialFormState);
  
  
  const [editing, setEditing] = useState(false);
  // const editRow = id => {
  //   setEditing(true)

  //   setCurrentUser({ ...currentUser, [id.target.name]: id.target.value })
  // }

    const [userData, setUserData] = useState([]);
    const deleteUser = id => {
      setUserData(userData.filter(i => i.id !== id))
    }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUserData(userData.map(user => (user.id === id ? updatedUser : user)))
  }
 
   
    useEffect(()=>{
      axiosWithAuth()
        .get(`https://production-juxta-city-be.herokuapp.com/api/profile/${userId}/user`)
        .then(res =>{
            console.log("Other Users!", res.data)
            setUserData(res.data);
        })
        .catch(err => {
            console.log("Somethings Up!", err);
        })
    }, [])

   
    console.log(userData)
  return (
<section>
      <NavBar {...props} />

     
    <Container maxWidth="lg">
        <h1>WELCOME</h1>

        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUser
              setEditing={setEditing}
              // currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add Your Info</h2>
            <AddUser {...props} setUserData={setUserData} />
          </div>
          )}
         
            <h2>View & Edit</h2>
            {/*<UserTable {...props} userData={userData} deleteUser={deleteUser} editUser={editRow}/>*/}
    </Container>
  
        
</section>
    
  );
};

