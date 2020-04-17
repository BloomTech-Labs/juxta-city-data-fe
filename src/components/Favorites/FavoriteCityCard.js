import React from 'react'
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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
const history = useHistory();

const handleClick = e => {
    localStorage.setItem('cityName', props.cityData.city)
    history.push('/cityview')
}
    return(
        <div className={classes.root}>
            <FavoriteIcon class={classes.image} {...props} cityData={props.cityData} />
            <p className={classes.cityName} onClick={handleClick}>{props.cityData.city}</p>
        </div>
    )
}