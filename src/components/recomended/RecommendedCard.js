import React, { useContext } from "react";
import FavoriteIcon from "../subComponents/FavoriteIcon";
import CityContext from "../../contexts/CityContext";
import { getCityData } from "../../functions";
import { Card, Header, Button } from "semantic-ui-react";

export default function RecommendedCard(props) {
  const { setCityData } = useContext(CityContext);

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
    <div className="card-header" >
      <FavoriteIcon  cityData={props.cityData} {...props} />
      <Header as="h4" >{props.cityData.name_and_state}</Header>
      <p className="livability-score">{livabilityScore}</p>
    </div>
    <Card.Content>{props.cityData.population_desc}</Card.Content>
    <Button basic onClick={handleClick}>
      Learn More
    </Button>
  </Card>
);
}
