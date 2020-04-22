import React, {useContext} from 'react';
import RecommendedCard from './RecommendedCard';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { GridList } from "@material-ui/core";
import UserContext from '../../contexts/UserContext';
import cityscape from '../../assets/cityscape.png'

const useStyles = makeStyles((theme) =>( {
    root: {
        margin: '40px 0 50px 0' 
    },
    header: {
        textAlign: 'center',
        fontSize: 36,
        [theme.breakpoints.down('sm')]:{
            fontSize: 28
        }
    },
    gridList: {
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexWrap: "nowrap",
            transform: "translateZ(0)",
        },
      },
    cityscape: {
        margin: '30px 5px',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));
export default function RecommendedComponent(props){
    const classes = useStyles();
    const {userData} = useContext(UserContext);
    const cityData = [
        {
            id: 223,
            city: 'Seattle, Washington',
            livabilityScore: 56.5,
            population_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ullamcorper mauris, sed tincidunt dui laoreet sed. Donec at elementum massa. Vivamus pellentesque quam ligula, a malesuada mauris condimentum vitae. Nullam metus erat, tincidunt vitae tortor sit amet, interdum ullamcorper nunc. Curabitur eget odio metus. Praesent tempor tincidunt arcu, ut ornare dui porta sed. Mauris a dignissim quam. Phasellus lobortis venenatis sagittis.'
        },
        {
            id: 4523,
            city: 'Stockton',
            livabilityScore: 76.5,
            population_desc: 'lorem ipsum blah blah blah'
        },
        {
            id: 4543,
            city: 'Stockton',
            livabilityScore: 76.5,
            population_desc: 'lorem ipsum blah blah blah'
        },
        {
            id: 4573,
            city: 'Stockton',
            livabilityScore: 76.5,
            population_desc: 'lorem ipsum blah blah blah'
        },
        {
            id: 45763,
            city: 'Stockton',
            livabilityScore: 76.5,
            population_desc: 'lorem ipsum blah blah blah'
        }
        ] ;

        return !cityData ? (
            <></>
        ):(
        <Container className={classes.root}>
            <h1 className={classes.header}>Your Recommended Cities</h1>
            <GridList cellHeight={270} className={classes.gridList} >
                {cityData.map(city => (
                    <RecommendedCard key={city.id} {...props} cityData={city}/>
                ))}
                <img src={cityscape} className={classes.cityscape}  style={{width: 355, height: 220}} alt='cityscape'/>
            </GridList>
        </Container>
    )
}