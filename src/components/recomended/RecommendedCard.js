import React, { useContext } from "react";
import { useStyles } from "./recommendedStyles";
import FavoriteIcon from "../subComponents/FavoriteIcon";
import CityContext from "../../contexts/CityContext";
import { getCityData } from "../../functions";
import { Card, Header, Button } from "semantic-ui-react";
import livabilityIcon from '../../assets/livabilityIcon.png';

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
  <Card >
    <div style={{display:"flex", flexDirection:"row",   paddingLeft:'15px', alignItems: 'baseline', justifyContent:"space-between"}} >
      <FavoriteIcon  cityData={props.cityData} {...props} />
      <Header as="h4" >{props.cityData.name_and_state}</Header>
      <p style={{
        width: "50px",
        height: "60px",
        color: 'black',
        fontWeight: 'bold', 
        paddingRight: "5px",
        paddingLeft: "2px",
        margin: '0 auto',
        lineHeight:"50px",
        backgroundImage: `url(${livabilityIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '36px 54px'
      }} >{livabilityScore}</p>
    </div>
    <Card.Content>{props.cityData.population_desc}</Card.Content>
    <Button basic color='gray' onClick={handleClick}>
      Learn More
    </Button>
  </Card>
);

  // return (
  //   <Paper className={classes.cardRoot}>
  //     <div className={classes.cardHeader}>
  //       <FavoriteIcon class={classes.heart} cityData={props.cityData} {...props} />
  //       <h4 className={classes.cardHeading}>{props.cityData.name_and_state}</h4>
  //       <p className={classes.livability}>{livabilityScore}</p>
  //     </div>
  //     <p className={classes.description}>{props.cityData.population_desc}</p>
  //     <button
  //       style={{ color: "#2C98F0" }}
  //       onClick={handleClick}
  //       className={classes.learn}
  //     >
  //       Learn More
  //     </button>
  //   </Paper>
  // );
}
