import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./recommendedStyles";
import FavoriteIcon from "../subComponents/FavoriteIcon";
import CityContext from "../../contexts/CityContext";
import { getCityData } from "../../functions";

export default function RecommendedCard(props) {
  const { setCityData } = useContext(CityContext);
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    getCityData(props.cityData.name_and_state).then((res) => {
      setCityData(res);
      localStorage.setItem("cityName", res.city);
      props.history.push("/cityview");
    });
  };;
const livabilityScore = Math.floor(props.cityData.livability_score * 10) / 10 

  return (
    <Paper className={classes.cardRoot}>
      <div className={classes.cardHeader}>
        <FavoriteIcon class={classes.heart} cityData={props.cityData} {...props} />
        <h4 className={classes.cardHeading}>{props.cityData.name_and_state}</h4>
        <p className={classes.livability}>{livabilityScore}</p>
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
