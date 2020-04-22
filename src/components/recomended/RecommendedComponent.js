import React, {useContext} from 'react';
import RecommendedCard from './RecommendedCard';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { GridList } from "@material-ui/core";
import UserContext from '../../contexts/UserContext';

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
        flexWrap: "nowrap",
        transform: "translateZ(0)",
      },
}));
export default function RecommendedComponent(props){
    const classes = useStyles();
    const {userData} = useContext(UserContext);
    const cityData = userData.recommendedCities;
        return !cityData ? (
            <></>
        ):(
        <Container className={classes.root}>
            <h1 className={classes.header}>Your Recommended Cities</h1>
            <GridList cols={1} className={classes.gridList}>
                {cityData.map(city => (
                    <RecommendedCard key={city.id} {...props} cityData={city}/>
                ))}
            </GridList>
        </Container>
    )
}