import { makeStyles } from '@material-ui/core/styles';
import rand from './helperFunction';

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    outline: 'none',
    padding: theme.spacing(2, 4, 3),
  },
  heading: {
    color: '#1976D2',
    textAlign: 'center',
    fontSize: '24px',
  },
  description: {
    fontSize: '16px',
    color: '#212121',
    fontWeight: 'normal',
    marginTop: '18px',
  },
  annotate: {
    fontSize: '14px',
    color: '#1976D2',
    fontWeight: 'normal',
    display: 'inlineBlock',
    cursor: 'pointer',
    marginLeft: '21px',
  },
}));

export const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};
