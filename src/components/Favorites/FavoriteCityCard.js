import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import fullheart from '../../assets/fullheart.png';
import emptyheart from '../../assets/emptyheart.png';
import { lightBlue } from '@material-ui/core/colors';
import CityContext from '../../contexts/CityContext';
import UserContext from '../../contexts/UserContext';
const styles = makeStyles(theme => ({
    root: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            width: '90%'
          },
        '&:hover': {
            background: 'whiteSmoke'
        }
    },
    cityName: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        
    },
    image: {
        padding: 10
    }
}))
export default function FavoiriteCityCard(props){
const classes = styles()
const [city, setCity] = useState({})
const [favorited, setFavorited] = useState(true)
const {cityData, setCityData} = useContext(CityContext)
const {userData, setUserData} = useContext(UserContext)
const history = useHistory();

useEffect(()=>{
    axios.get(`https://junta-test.herokuapp.com/data?city=${props.cityData}`)
    .then(res => {
        setCity(res.data)
    })
}, [])

const handleClick = e => {
    axios.get(`https://junta-test.herokuapp.com/data?city=${props.cityData}`)
    .then(res => {
      console.log()
      setCityData(res.data);
      localStorage.setItem('cityName', res.data.city)
      history.push('/cityview')
    })
}

const handleFavorite = e => {
    if(favorited){
        setFavorited(false)
        axios.delete(`https://production-juxta-city-be.herokuapp.com/api/users/${userData.id}/delete/${city.id}`).then(res=> {
                console.log(res, 'unfavorite completed!')
            })
    }else{
        setFavorited(true)
    }
}
    return(
        <div className={classes.root}>
            <img className={classes.image} src={favorited ? fullheart: emptyheart} onClick={handleFavorite} alt='favorite heart Icon'/>
            <p className={classes.cityName} onClick={handleClick}>{props.cityData}</p>
        </div>
    )
}