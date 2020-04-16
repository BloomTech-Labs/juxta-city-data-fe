import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import useStyles from './recommendedStyles';
import FavoriteIcon from '../subComponents/FavoriteIcon';
import CityContext from '../../contexts/CityContext';
import {getCityData} from '../../functions';

export default function RecommendedCard(props){
    const {setCityData} = useContext(CityContext);
    const classes = makeStyles((theme) => (useStyles))();
    const handleClick = () => {
        getCityData(props.cityData.city).then(res => {
            setCityData(res)
            localStorage.setItem('cityName', props.cityData.city)
            props.history.push('/cityview')
        })
        
    }
    return (
        <Paper className={classes.cardRoot}>
            <div className={classes.cardHeader}>
                <FavoriteIcon class={classes.heart} {...props}/>
                <h4 className={classes.cardHeading}>{props.cityData.city}</h4>
                <p className={classes.livability}>{props.cityData.livabilityScore}</p>
            </div>
            <p className={classes.description}>{props.cityData.population_desc}</p>
            <button style={{color: '#2C98F0'}} onClick={handleClick} className={classes.learn}>Learn More</button>
        </Paper>
    )
}