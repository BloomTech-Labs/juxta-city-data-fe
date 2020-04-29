import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 800,
        maxWidth: '100%',
        margin: '20vh auto',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column'
        }
    },
    header: {
        width: '100%',
        [theme.breakpoints.down('sm')]:{
            paddingLeft: 20,
        }
    },
    box: {
        width: '49%',
        display: 'flex',
        padding: 20,
        margin: '2px',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]:{
            width: '90%',
            border: 0,
            margin: '10px auto'
        }
    },
    h3: {
      color: 'white',  
      fontSize: 30,
      marginTop: 0,
    },
    form: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputs: {
        color: 'rgba(33, 33, 33, 0.85)',
        fontWeight: '500',
        fontSize: 15,
        height: 25,
        width: '70%',
        margin: '1% 15%',
        border: 'none',
        padding: 1,
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            fontSize: 13,
        }

    },
    submit: {
        border: 'none',
        color: 'white',
        margin: '2% 40%',
        padding: '5px 10px',
        borderRadius:'5px'
    }
}))

export {styles}