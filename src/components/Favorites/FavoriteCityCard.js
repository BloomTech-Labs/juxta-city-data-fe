import React , { useContext }  from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "../subComponents/FavoriteIcon";
import { getCityData } from "../../functions";
import CityContext from "../../contexts/CityContext";

const styles = makeStyles((theme) => ({
  root: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    "&:hover": {
      background: "whiteSmoke",
      cursor: "pointer",
    },
  },
  cityName: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    padding: 10,
  },
}));
export default function FavoiriteCityCard(props) {
  const classes = styles();
  const history = useHistory();

  const { setCityData } = useContext(CityContext);

  const handleClick = (e) => {
    getCityData(props.cityData.city).then((res) => {
      setCityData(res);
      localStorage.setItem("cityName", props.cityData.city);
      history.push("/cityview");
    });
  };
  return (
    <div className={classes.root}>
      <FavoriteIcon
        class={classes.image}
        {...props}
        cityData={props.cityData}
      />
      <p data-testid="heartBtn" className={classes.cityName} onClick={handleClick}>
        {props.cityData.city}
      </p>
    </div>
  );
}
