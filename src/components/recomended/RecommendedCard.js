import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./recommendedStyles";
import FavoriteIcon from "../subComponents/FavoriteIcon";
import CityContext from "../../contexts/CityContext";
import { getCityData } from "../../functions";

export default function RecommendedCard(props) {
  const { setCityData } = useContext(CityContext);
  const classes = useStyles();
  const handleClick = () => {
    getCityData(props.cityData.name_and_state).then((res) => {
      setCityData(res);
      localStorage.setItem("cityName", props.cityData.city);
      props.history.push("/cityview");
    });
  };
  return (
    <Paper className={classes.cardRoot}>
      <div className={classes.cardHeader}>
        <FavoriteIcon class={classes.heart} {...props} />
        <h4 className={classes.cardHeading}>{props.cityData.name_and_state}</h4>
        <p className={classes.livability}>{props.cityData.livability_score}</p>
      </div>
      <p className={classes.description}>{props.cityData.population_desc}</p>
      <button
        style={{ color: "#2C98F0" }}
        onClick={handleClick}
        className={classes.learn}
      >
        Learn More
      </button>
    </Paper>
  );
}
