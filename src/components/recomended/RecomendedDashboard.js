import React, { useEffect, useState, useContext } from "react";
import NavBar from "../Navbar";
import RecommendedCard from "./RecommendedCard";
import cityscape from "../../assets/cityscape.png";
import RecommendedContext from "../../contexts/RecomendedContext";
import UserContext from "../../contexts/UserContext";
import { Header, Button } from "semantic-ui-react";

export default function RecommendedDashboard({ auth, history, location }) {

  const { recomendedCity } = useContext(RecommendedContext);
  const { userData } = useContext(UserContext);

  const user = Object.entries(userData).length;

  const [cities, setCities] = useState([]);
  useEffect(() => {
    setCities(recomendedCity);
    console.log(recomendedCity);
    if (recomendedCity.length === 0) {
      history.push("/dashboard");
    }
  }, [recomendedCity, history]);

  const props = { auth, history, location };

  return (
    <div >
      <NavBar {...props} />
      <Header as="h1" style={{textAlign:"center"}} >Your Recommended Cities</Header>
      <div className="cardBox">
        {cities ? (
          cities.map((city) => (
            <RecommendedCard key={city.id} {...props} cityData={city} />
          ))
        ) : ( <></>)}

        <img src={cityscape}  alt="cityscape" className="dash-cityscape"/>
      </div>
        <Button style={{color:"white", marginLeft:"85%",backgroundColor:'#0074cc', marginBottom:'50px' }} onClick={()=>{user > 0 ?(history.push("/dashboard")):( history.push("/")) } } >
          Go To Dashboard
        </Button>
    </div>
  );
}
