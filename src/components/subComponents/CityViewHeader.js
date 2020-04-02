import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import fullheart from '../../assets/fullheart.png'
import emptyheart from '../../assets/emptyheart.png'

import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import UserContext from '../../contexts/UserContext';
const styles = makeStyles(theme => ({
    root: {
        height: 350,
        margin: '0 auto',
    },
    HeadingBox: {
        display: 'flex',
        alignItems: 'center',
        margin: '25px 0 0 80px',
        [theme.breakpoints.down('sm')]: {
            margin: '30px 0 0 0',
        }
    },
    Heart : {
            width: 20,
            height: 18
        },
    Heading: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 24,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20
    },
    Note: {
        marginLeft: 80,
        fontWeight: 500,
        fontSize: 16
    }
}));

export default function CityViewHeader(props){
    const classes = styles();
    const {userData, setUserData} = useContext(UserContext);
    useEffect(()=> {
    }, [])
    const handleFavorite = e => {
        e.preventDefault();
        if(userData.name && !userData.favorites.includes(props.cityData.city)){
            axios.post('', {user_id: userData.id, city_id: props.cityData.id}).then(res=> {
                console.log(res, 'favorite completed!')
            })
        }else if(userData.name && userData.favorites.includes(props.cityData.city)){
            axios.delete('', {user_id: userData.id, city_id: props.cityData.id}).then(res=> {
                console.log(res, 'unfavorite completed!')
            })
        }else{
            props.history.push('/signup')
        }
    }
    if(!props.cityData.population){    
        return <div className={classes.root}>Loading...</div>
    }else{
        return(
            <div className={classes.root}>
                <div className={classes.HeadingBox}>
                    <img className={classes.Heart} onClick={handleFavorite} src={!userData.favorites ? emptyheart : !props.cityData.city.includes(props.cityData.city) ? fullheart: emptyheart}/>
                    <h3 className={classes.Heading}>{props.cityData.city}</h3> 
                </div>
                <p className={classes.Note}>Population: {props.cityData.population}</p>
            </div>
    )}
    
    
}