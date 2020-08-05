import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Header } from 'semantic-ui-react'
// import TabBar from "./TabBar";
import FavoriteIcon from "./FavoriteIcon";

// const styles = makeStyles((theme) => ({
//   root: {
//     height: 75,
//     margin: "0 auto",
//   },
//   HeadingBox: {
//     display: "flex",
//     alignItems: "center",
//     margin: "25px 0 0 80px",
//     [theme.breakpoints.down("sm")]: {
//       margin: "30px 0 0 0",
//     },
//   },
//   Heart: {
//     width: 20,
//     height: 18,
//   },
//   Heading: {
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: 24,
//     display: "flex",
//     alignItems: "center",
//     paddingLeft: 20,
//   },
//   Note: {
//     marginLeft: 80,
//     fontWeight: 500,
//     fontSize: 16,
//   },
// }));

export default function CityViewHeader(props) {
  // const classes = styles();
    return (
      // <>
      //   {/* <TabBar /> */}
      //   <div className={classes.root}>
          <div  className="header-city">
            <FavoriteIcon  cityData={props.cityData} {...props} />
            <Header as='h1'>{props.cityData.city}</Header>
          </div>
      //   </div>
      // </>
    );
}
