import React from 'react';
import RecommendedCard from './RecommendedCard';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { GridList } from "@material-ui/core";

const useStyles = makeStyles((theme) =>( {
    header: {
        textAlign: 'center',
        fontSize: 36,
        [theme.breakpoints.down('sm')]:{
            fontSize: 28
        }
    },
    gridList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
        width: '100%'
      },
}));
export default function RecommendedComponent(props){
    const classes = useStyles();
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
        },{
            id: 223,
            city: 'Seattle, Washington',
            livabilityScore: 56.5,
            population_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ullamcorper mauris, sed tincidunt dui laoreet sed. Donec at elementum massa. Vivamus pellentesque quam ligula, a malesuada mauris condimentum vitae. Nullam metus erat, tincidunt vitae tortor sit amet, interdum ullamcorper nunc. Curabitur eget odio metus. Praesent tempor tincidunt arcu, ut ornare dui porta sed. Mauris a dignissim quam. Phasellus lobortis venenatis sagittis.'
        },{
            id: 223,
            city: 'Seattle, Washington',
            livabilityScore: 56.5,
            population_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ullamcorper mauris, sed tincidunt dui laoreet sed. Donec at elementum massa. Vivamus pellentesque quam ligula, a malesuada mauris condimentum vitae. Nullam metus erat, tincidunt vitae tortor sit amet, interdum ullamcorper nunc. Curabitur eget odio metus. Praesent tempor tincidunt arcu, ut ornare dui porta sed. Mauris a dignissim quam. Phasellus lobortis venenatis sagittis.'
        }
        ] 
    return (
        <Container>
            <h1 className={classes.header}>Your Recommended Cities</h1>
            <GridList cols={1} className={classes.gridList}>
                {cityData.map(city => (
                    <RecommendedCard {...props} cityData={city}/>
                ))}
            </GridList>
            
        </Container>
    )
}