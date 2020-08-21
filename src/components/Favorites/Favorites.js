import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import FavoriteCityCard from "./FavoriteCityCard";
import { Card } from 'semantic-ui-react';

export default function Favoirtes() {
  const [cities, setCities] = useState([]);
  const {userData} = useContext(UserContext);
  
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/");
    }

    if (userData.favorites) {
      setCities(userData.favorites);
    }
  }, [userData, setCities, history]);

  return cities.length === 0 ? (
    <></>
  ) : (
    <Card fluid style={{ marginTop:'20px'}}>
     <Card.Content>
     <Card.Header textAlign="center" as='h1' >Favorite Cities</Card.Header>
      <Card.Group centered >
        {cities.map((city) => (
          <FavoriteCityCard key={city.id} cityData={city} />
        ))}
      </Card.Group>
     </Card.Content>
    </Card>
  );
}
