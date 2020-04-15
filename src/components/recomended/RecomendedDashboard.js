import React from 'react';
import axios from 'axios';
import NavBar from '../Navbar';
import useStyles from './recommendedStyles';



export default function recommendedDashboard(props) {
    console.log(props)
    const classes = useStyles;
    return (
        <div className={classes.root}>
            <NavBar {...props}/>

        </div>
    )
}