import React from 'react';
import IconBox from './IconBox';
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
    IconCard: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          flexDirection: 'row',
          margin: '25px 0',
          justifyContent: 'space-between',
          alignItems: 'center'
        }
      },
      body: {
        fontWeight: 'normal',
        fontSize: 18,
        [theme.breakpoints.down('sm')]: {
          fontSize: 16,
          paddingLeft: 30,
          width: '65%'
        }
      },
      img: {
        margin: '0 auto',
        [theme.breakpoints.down('xs')]: {
          width: '20%',
          margin: 0
        }
      }
}))

export default function IconCard({image, body}){
    const classes = styles();
    return(
      <div className={classes.IconCard}>
        <img
          className={classes.img}
          src={image.src}
          alt={image.alt}
        />
        <p className={classes.body}>{body}</p>
      </div>
    )
}