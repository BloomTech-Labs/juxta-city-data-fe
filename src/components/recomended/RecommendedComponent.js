import React, {useContext, useEffect, useState} from 'react';
import RecommendedCard from './RecommendedCard';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { GridList } from "@material-ui/core";
import RecomendedContext from '../../contexts/RecomendedContext';
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
        overflowY: 'inherit',
        [theme.breakpoints.down('sm')]:{
            overflowY: 'auto',
            justifyContent: 'flex-start',
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
    const [cities, setCities] = useState(null)
    const {recomendedCity} = useContext(RecomendedContext);
    useEffect(()=>{
        if(recomendedCity.length > 0){
            setCities(recomendedCity)
        }
    },[recomendedCity])
        return !cities ? (
            <></>
        ):(
        <Container className={classes.root}>
            <h1 className={classes.header}>Your Recommended Cities</h1>
            <GridList className={classes.gridList} >
                {cities.map(city => (
                    <RecommendedCard key={city.id} {...props} cityData={city}/>
                ))}
                <img src={cityscape} className={classes.cityscape}  style={{width: 355, height: 220}} alt='cityscape'/>
            </GridList>
        </Container>
    )
}