import livabilityIcon from '../../assets/livabilityIcon.png';

const useStyles = {
root : {
    
},
header: {
    width: '100%',
    marginLeft: 60
},
heading: {
    fontSize: 36
},
cardBox : {
    display: 'flex',
},
cardRoot : {
    margin: 10,
    width: 355,
    height: 270
},
cardHeader : {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between'
},
cardHeading : {
    width: '75%',
    textAlign: 'center'
},
livability: {
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
}
export default useStyles;