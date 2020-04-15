import React from 'react';
import NavBar from '../Navbar';
import RecommendedCard from './RecommendedCard';
import useStyles from './recommendedStyles';
import { makeStyles } from '@material-ui/core';



export default function recommendedDashboard(props) {
    const cityData = [
    {
        city: 'fakeVille',
        livabilityScore: 56.5,
        population_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ullamcorper mauris, sed tincidunt dui laoreet sed. Donec at elementum massa. Vivamus pellentesque quam ligula, a malesuada mauris condimentum vitae. Nullam metus erat, tincidunt vitae tortor sit amet, interdum ullamcorper nunc. Curabitur eget odio metus. Praesent tempor tincidunt arcu, ut ornare dui porta sed. Mauris a dignissim quam. Phasellus lobortis venenatis sagittis.'
    },
    {
        city: 'Stockton',
        livabilityScore: 76.5,
        population_desc: 'lorem ipsum blah blah blah'
    }
    ]
    const classes = makeStyles((theme) => (useStyles))();
    return (
        <div className={classes.root}>
            <NavBar {...props}/>
            <div className={classes.header}>
                <h1 className={classes.heading}>Your Recommended Cities</h1>
            </div>
            <div className={classes.cardBox}>
                {cityData.map(city => (
                    <RecommendedCard cityData={city}/>
                ))}
            </div>
        </div>
    )
}