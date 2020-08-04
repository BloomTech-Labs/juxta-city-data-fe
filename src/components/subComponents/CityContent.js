import React from "react";
import DescriptionBox from "./DescriptionBox.js";
import { makeStyles } from "@material-ui/core/styles";
import EconomyGraph from "./industryGraph/EconomyGraph.js";

const styles = makeStyles((theme) => ({
  root: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));
export default function CityContent(props) {
  const classes = styles();
  return (
    <div className={classes.root}>
      <EconomyGraph {...props} />
      <DescriptionBox
        {...props}
        title={"Population"}
        data={props.cityData.population_desc}
      />
      <DescriptionBox
        {...props}
        title={"Climate"}
        data={props.cityData.climate_desc}
      />
      <DescriptionBox
        {...props}
        title={"Economy"}
        data={props.cityData.economy_desc}
      />
      <DescriptionBox
        {...props}
        title={"Cost of Living"}
        data={props.cityData.living_cost_desc}
      />
      <div>
      <DescriptionBox {...props}
      title={"Health Data"}
       />
       <p style = {{width: 400, marginLeft: '7.5rem'}}>
       <a target ="blank" href ="https://findyourcity.herokuapp.com">Click here </a> for an interactive map on heart disease
      </p>
      </div>
    </div>
  );
}
