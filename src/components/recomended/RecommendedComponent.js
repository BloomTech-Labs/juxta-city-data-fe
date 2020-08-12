import React, { useContext, useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";
import RecomendedContext from "../../contexts/RecomendedContext";
import cityscape from "../../assets/cityscape.png";
import { Header} from "semantic-ui-react";

export default function RecommendedComponent(props) {
  const [cities, setCities] = useState(null);
  const { recomendedCity } = useContext(RecomendedContext);

  useEffect(() => {
    if (recomendedCity.length > 0) {
      setCities(recomendedCity);
    }
  }, [recomendedCity]);
  return !cities ? (
    <></>
  ) : (
    <div>
      <Header as="h1" style={{ textAlign: "center" }}>Your Recommended Cities </Header>
      <div className="cardBox">
        {cities.map((city) => (
          <RecommendedCard key={city.id} {...props} cityData={city} />
        ))}
        <img src={cityscape} alt="cityscape" className="comp-cityscape"/>
      </div>
    </div>
  );
}
