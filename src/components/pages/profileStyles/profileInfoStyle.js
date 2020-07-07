import { makeStyles } from '@material-ui/core/styles';
const profileInfoStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    width: '100%',
    margin: theme.spacing(1),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: 'auto'
  }
}));
export default profileInfoStyle;
