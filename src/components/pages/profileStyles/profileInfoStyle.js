import { makeStyles } from "@material-ui/core/styles";
const profileInfoStyle = makeStyles((theme) => ({ 
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        width: "100%",
      },
}));
export default profileInfoStyle;