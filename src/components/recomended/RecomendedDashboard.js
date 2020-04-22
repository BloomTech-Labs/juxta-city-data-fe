import React from 'react';
import NavBar from '../Navbar';
import RecommendedCard from './RecommendedCard';
import useStyles from './recommendedStyles';
import { makeStyles } from '@material-ui/core';
import cityscape from '../../assets/cityscape.png';

const cityData = [
    {
        id: 223,
        city: 'Seattle, Washington',
        livabilityScore: 56.5,
        population_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ullamcorper mauris, sed tincidunt dui laoreet sed. Donec at elementum massa. Vivamus pellentesque quam ligula, a malesuada mauris condimentum vitae. Nullam metus erat, tincidunt vitae tortor sit amet, interdum ullamcorper nunc. Curabitur eget odio metus. Praesent tempor tincidunt arcu, ut ornare dui porta sed. Mauris a dignissim quam. Phasellus lobortis venenatis sagittis.'
    },
    {
        id: 453,
        city: 'Stockton',
        livabilityScore: 76.5,
        population_desc: 'lorem ipsum blah blah blah'
    },
    {
        id: 453,
        city: 'Stockton',
        livabilityScore: 76.5,
        population_desc: 'lorem ipsum blah blah blah'
    },
    {
        id: 453,
        city: 'Stockton',
        livabilityScore: 76.5,
        population_desc: 'lorem ipsum blah blah blah'
    },
    {
        id: 453,
        city: 'Stockton',
        livabilityScore: 76.5,
        population_desc: 'lorem ipsum blah blah blah'
    }
    ] 
    

    export default function recommendedDashboard({ auth, history, location }) {
    const classes = makeStyles((theme) => ({...useStyles,
    header: {
        width: '90%',
        marginLeft: 60,
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto'
        },
    },
    heading: {
        fontSize: 36,
        [theme.breakpoints.down('sm')]: {
            fontSize: 26,
            margin: '0 auto'
        },
    },
    cityscape : {
        margin: '30px 5px',
        width: 355,
        padding: '0 ',
        maxWidth: '95%',
        height: 220
    }
    }))();
    const props = { auth, history, location, cityData};
    return (
        <div className={classes.root}>
            <NavBar {...props}/>
            <div className={classes.header}>
                <h1 className={classes.heading}>Your Recommended Cities</h1>
            </div>
            <div className={classes.cardBox}>
                {cityData.map(city => (
                    <RecommendedCard {...props} cityData={city}/>
                ))}
                <img src={cityscape} className={classes.cityscape} alt='cityscape'/>
            </div>
        </div>
    )
}