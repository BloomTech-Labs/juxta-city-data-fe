import { makeStyles } from "@material-ui/core/styles";
const formStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
         margin: theme.spacing(1),
          width: "25ch",
        },
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(3),
        margin: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      },
      button:{
        margin: theme.spacing(5),
      }, 
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
}));
export default formStyles;