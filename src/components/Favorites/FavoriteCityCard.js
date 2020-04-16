import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import fullheart from '../../assets/fullheart.png';
import emptyheart from '../../assets/emptyheart.png';
import CityContext from '../../contexts/CityContext';
import UserContext from '../../contexts/UserContext';
import FavoriteIcon from '../subComponents/FavoriteIcon';
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
const {setCityData} = useContext(CityContext)
const {userData} = useContext(UserContext)
const history = useHistory();

useEffect(()=>{
    //grabs the cityData for the city so the city can be favorited/unfavorited 
    axios.get(`https://junta-test.herokuapp.com/data?city=${props.cityData}`)
    .then(res => {
        setCity(res.data)
    })
}, [props.cityData])

const handleClick = e => {
    //sets context, saves name to storage, pushes to cityview page
    setCityData(city);
    localStorage.setItem('cityName', city.city)
    history.push('/cityview')
}
    return(
        <div className={classes.root}>
            <FavoriteIcon class={classes.image} {...props} cityData={props.cityData} />
            <p className={classes.cityName} onClick={handleClick}>{props.cityData}</p>
        </div>
    )
}