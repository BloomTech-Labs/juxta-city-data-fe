import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs'

import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';


const styles = makeStyles(theme => ({
    Tabs : {
        background: '#2196F3',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 28,
        color: 'white'
    }
}))

export default function TabBar(props){
const [value, setValue] = useState(null);
const classes = styles();

const handleChange = (event, newValue) => {
    setValue(newValue)
    props.history.replace(`/cityview/#${newValue}`)
}

    return(
        <AppBar position="static" color="default">
            <Tabs
            className={classes.Tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            
            >
                <Tab label="About" value='About'/>
                <Tab label="Population" value="Population" />
                <Tab label="Climate" value="Climate"/>
                <Tab label="Economy" value="Economy"/>
                <Tab label="Cost of Living" value="CostOfLiving"/>
            </Tabs>
            
        </AppBar>
    )
}