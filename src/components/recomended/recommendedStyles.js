import livabilityIcon from '../../assets/livabilityIcon.png';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root : {
    margin: '0 auto'
},
header: {
    width: '100%',
},
heading: {
    fontSize: 36
},
cardBox : {
    margin: '0 auto',
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent:'space-around',
},
cardRoot : {
    margin: '10px 5px',
    width: 355,
    maxWidth: '95%',
    height: 270,
},
cardHeader : {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between'
},
cardHeading : {
    width: '75%',
    textAlign: 'center',
},
livability: {
    width: 50,
    height: 60,
    color: 'white',
    fontWeight: 'bold', 
    paddingRight: 5,
    paddingLeft: 2,
    margin: '0 auto',
    lineHeight:2.7,
    backgroundImage: `url(${livabilityIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '36px 54px'
},
heart: {
    paddingLeft: 10
},
description: {
    background: 'linear-gradient(black 100px, white)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    height: 130,
    padding: 5,
    whiteSpace: 'wrap',
    overflow: 'hidden'
},
learn : {
    fontSize: 14,
    textDecoration: 'none',
    margin: '0 0 0 250px',
    border: 'none',
    background: 'none',
    '&:hover': {
        fontWeight: 'bold'
    }
},
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
}))
export {useStyles};