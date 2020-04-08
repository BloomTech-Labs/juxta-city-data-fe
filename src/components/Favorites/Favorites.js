import React, {useEffect, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import UserContext from '../../contexts/UserContext';
import { Container } from '@material-ui/core';

import FavoriteCityCard from './FavoriteCityCard';


const styles = makeStyles(theme => ({
    root: {
        boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.01)',
        borderRadius: '4px',
        maxWidth: 1100,
        maxHeight: 380,
        marginTop: 20,
        [theme.breakpoints.down('md')]: {
            width: '90%'
          },
    },
    header: {
        width: '100%',
        textAlign: 'center',
        fonStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        padding: '20px 0'
    },
    favoritesBox: {
        width: '90%'
    }
}))

export default function Favoirtes(props){
    const classes = styles()
    const [cities, setCities] = useState([])
    const {userData, setUserData}= useContext(UserContext)
    const history = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem('okta-token-storage')){
            history.push('/')
        }
        const userToken = localStorage.getItem('okta-token-storage')
        const claims = JSON.parse(userToken).idToken.claims;
        let data = {}
        axios.get(`https://production-juxta-city-be.herokuapp.com/api/users/${2}`).then(res=> {
            data = res.data
            setUserData(res.data)
            axios.get(`https://production-juxta-city-be.herokuapp.com/api/users/${2}/favorites`).then(res=>{
                setUserData({...data, favorites: res.data})
                res.data.map(favorite => {
                    axios.get(`https://junta-test.herokuapp.com/name?id=${favorite.city_id}`).then(res => {
                        setCities(oldCities => [...oldCities, res.data])
                    })
                })
            })
        }).catch(err => {
            console.log(err)
        })
        
    }, [!localStorage.getItem('userId')])
    console.log(cities)
    return cities.length < 1 ? (
        <p>loading...</p>
    ):
    (
        <Container className={classes.root}>
            <div className={classes.header}>
                Favorite Cities
            </div>
            <div className={classes.favoritesBox}>
                {cities.map(city=> (
                    <FavoriteCityCard cityData={city}/>
                ))}
            </div>
        </Container>
    )
}
