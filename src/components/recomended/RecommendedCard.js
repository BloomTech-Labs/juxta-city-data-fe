import React from 'react';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import useStyles from './recommendedStyles';
import emptyheart from '../../assets/emptyheart.png';
import fullheart from '../../assets/fullheart.png';
import FavoriteIcon from '../subComponents/FavoriteIcon';

export default function RecommendedCard(props){
    const classes = makeStyles((theme) => (useStyles))();
    const handleClick = () => {
        localStorage.setItem('city', props.cityData.city)
    }
    return (
        <Paper className={classes.cardRoot}>
            <div className={classes.cardHeader}>
                <FavoriteIcon class={classes.heart} {...props}/>
                <h4 className={classes.cardHeading}>{props.cityData.city}</h4>
                <p className={classes.livability}>{props.cityData.livabilityScore}</p>
            </div>
            <p className={classes.description}>{props.cityData.population_desc}</p>
            <Link style={{color: '#2C98F0'}} to='/cityview' onClick={handleClick} className={classes.learn}>Learn More</Link>
        </Paper>
    )
}