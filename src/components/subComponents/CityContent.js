import React from 'react';
import DescriptionBox from './DescriptionBox.js';


import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';


const styles = makeStyles(theme => ({
    root: {
        width: '50%',
    }
}))
export default function CityContent(props){
    const classes = styles();
    console.log(props)
    return (
        <div className='classes.root'>
            <DescriptionBox id='Population' {...props} title={'Population'} data={props.cityData.population_desc}/>
            <DescriptionBox id='Climate' {...props} title={'Climate'} data={props.cityData.climate_desc}/>
            <DescriptionBox id='Economy' {...props} title={'Economy'} data={props.cityData.economy_desc}/>
            <DescriptionBox id='CostOfLiving' {...props} title={'Cost of Living'} data={props.cityData.living_cost_desc}/>
        </div>
    )
}