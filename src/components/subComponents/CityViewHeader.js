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
        //checks to see if their is no userContext and if their is a usertoken it can grab an id from 
        if(!userData.id && localStorage.getItem('okta-token-storage')){
            const token = localStorage.getItem('okta-token-storage')
            const name = JSON.parse(token).idToken.claims.name;
            let data = {}
            //restores usercontext
            axios.get(`https://production-juxta-city-be.herokuapp.com/api/users/${1}`).then(res=> {
                data = res.data
                setUserData(res.data)
                //adds users favorite cities
                axios.get(`https://production-juxta-city-be.herokuapp.com/api/users/${1}/favorites`).then(res=>{
                    setUserData({...data, favorites: res.data})
                }).catch(err => console.log(err))
            }).catch(err => console.log(err))
        }
    }, [setUserData, userData.id])
    const handleFavorite = e => {
        e.preventDefault();
        //checks if theire is a user logged in and if the they have the current city saved
        if(userData.id && !userData.favorites.some(fav => fav.city_id === props.cityData.id)){
            //creates the body to add a favorite city
            const object = {user_id: userData.id, city_id: props.cityData.id}
            axios.post(`https://production-juxta-city-be.herokuapp.com/api/users/${userData.id}/favorites`, object).then(res=> {
                console.log(res, 'favorite completed!')
            }).catch(err => console.log(err))
        //checks if theire is a user logged in and if the they have the current city saved
        }else if(userData.id && userData.favorites.some(fav => fav.city_id === props.cityData.id)){
            console.log('user id =>', userData.id, 'city Id =>', props.cityData.id)
            //deletes the favorite
            axios.delete(`https://production-juxta-city-be.herokuapp.com/api/users/${userData.id}/delete/${props.cityData.id}`).then(res=> {
                console.log(res, 'unfavorite completed!')
            })
        }else{
            //brings user to signin page if they arent logged in
            props.history.push('/signin')
        }
    }
    if(!props.cityData.population){    
        return <div className={classes.root}>Loading...</div>
    }else{
        return(
            <div className={classes.root}>
                <div className={classes.HeadingBox}>
                    <img
                      className={classes.Heart}
                      onClick={handleFavorite}
                      src={!userData.favorites
                        ? emptyheart
                        : userData
                          .favorites
                          .some(fav => fav.city_id === props.cityData.id)
                            ? fullheart
                            : emptyheart}
                      alt="favorite icon"
                    />
                    <h3 className={classes.Heading}>{props.cityData.city}</h3> 
                </div>
                <p className={classes.Note}>Population: {props.cityData.population}</p>
            </div>
    )}
    
    
}
