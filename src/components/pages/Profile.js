import React, {useContext} from "react";
import NavBar from "../Navbar.js";
import SignIn from "../auth/SignIn"
import {UserContext} from "./UserContext"


export function Profile(){
    const {userData, setUserData} = useContext(UserContext)
  
  return (
    <div>
      <NavBar/>
      <h3>Welcome</h3>
      <div>
        <h2>{userData}</h2>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
        {userData ? (
          <button
            onClick={() => {
              // call logout
              setUserData(null);
            }}
          >
            logout
          </button>
        ) : (
            <button
              onClick = {async () => {
                const userData = await SignIn();
                setUserData(userData);
              }}
            >
              login
            </button>
          )}
      </div>
    </div>
  );
};

