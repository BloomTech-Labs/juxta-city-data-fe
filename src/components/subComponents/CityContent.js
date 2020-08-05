import React from "react";
import DescriptionBox from "./DescriptionBox.js";
import { makeStyles } from "@material-ui/core/styles";
import EconomyGraph from "./industryGraph/EconomyGraph.js";
import Population from "./descriptions/Population";
import Climate from "./descriptions/Climate";
import Economy from "./descriptions/Economy";
import CostOfLiving from "./descriptions/CostOfLiving";
import Health from "./descriptions/Health";
const styles = makeStyles((theme) => ({
  root: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    marginBottom:"10%"
  },
}));
export default function CityContent(props) {
  const classes = styles();
 
  return (
    <div className="desctiption-container">
      <Population {...props} title={"Population"} data={props.cityData} />
      <Climate {...props} title={"Climate"} data={props.cityData} />
      {/* <DescriptionBox
        {...props}
        title={"Population"}
        data={props.cityData.population_desc}
      />
      <DescriptionBox
        {...props}
        title={"Climate"}
        data={props.cityData.climate_desc}
      /> */}
        <Economy
        {...props}
        title={"Economy"}
        data={props.cityData}
      />
      {((props.cityData.Most_Common_Industries) ==="No Data Available")? (null):( 
        <EconomyGraph {...props} />
    )}
      {/* <DescriptionBox
        {...props}
        title={"Economy"}
        data={props.cityData.economy_desc}
      /> */}
           <CostOfLiving
         {...props}
         title={"Cost of Living"}
         data={props.cityData}
      />
      {/* <DescriptionBox
        {...props}
        title={"Cost of Living"}
        data={props.cityData.living_cost_desc}
      /> */}
      <Health {...props} title={"Health Data"}/>
      {/* <div>
        <DescriptionBox {...props} title={"Health Data"} />
        <p style={{ width: 400, marginLeft: "7.5rem" }}>
          <a target="blank" href="https://findyourcity.herokuapp.com">
            Click here{" "}
          </a>{" "}
          for an interactive map on heart disease
        </p>
      </div> */}
    </div>
  );
}
