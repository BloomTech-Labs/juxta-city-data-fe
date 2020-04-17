import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TabBar from "./TabBar";
import FavoriteIcon from "./FavoriteIcon";

const styles = makeStyles((theme) => ({
  root: {
    height: 75,
    margin: "0 auto",
  },
  HeadingBox: {
    display: "flex",
    alignItems: "center",
    margin: "25px 0 0 80px",
    [theme.breakpoints.down("sm")]: {
      margin: "30px 0 0 0",
    },
  },
  Heart: {
    width: 20,
    height: 18,
  },
  Heading: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
  },
  Note: {
    marginLeft: 80,
    fontWeight: 500,
    fontSize: 16,
  },
}));

export default function CityViewHeader(props) {
  const classes = styles();
  if (!props.cityData.population) {
    return <div className={classes.root}>Loading...</div>;
  } else {
    return (
      <>
        <TabBar />
        <div className={classes.root}>
          <div className={classes.HeadingBox}>
            <FavoriteIcon class={classes.Heart} cityData={props.cityData} />
            <h3 className={classes.Heading}>{props.cityData.city}</h3>
          </div>
        </div>
      </>
    );
  }
}
