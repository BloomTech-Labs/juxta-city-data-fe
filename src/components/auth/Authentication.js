import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {styles} from './authStlyes';
import logo from '../../assets/logo.png'

export default function Authentication(props){
    const classes = styles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <img src={logo} alt='findur logo'/>
            </div>
            <SignUp {...props}/>
            <SignIn {...props}/>
        </div>
    )
}