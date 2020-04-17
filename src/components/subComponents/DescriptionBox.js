import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles(theme => ({
    root: {
        width: '100%',
        margin: '67px 0 0 123px',
        [theme.breakpoints.down('sm')]: {
            margin: '67px 0 0 0'
        },
    },
    heading: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 24,
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: '0 auto',
        }
    },
    description: {
        width: 400,
        fontWeight: 400,
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: '0 auto',
        }
    }

}))
export default function CityContent(props){
    const classes = styles();
    return (
        <div className={classes.root} id={props.title.trim()}>
            <h2 className={classes.heading}>{props.title}</h2>
            <p className={classes.description}>{props.data}</p>
        </div>
    )
}