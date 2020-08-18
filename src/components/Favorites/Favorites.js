import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../../contexts/UserContext";
import { Container } from "@material-ui/core";

import FavoriteCityCard from "./FavoriteCityCard";
import SearchBar from "../subComponents/SearchBar"
import { Button} from "semantic-ui-react";

const styles = makeStyles((theme) => ({
  root: {
    boxShadow:
      "0px 1px 12px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 4px rgba(0, 0, 0, 0.01)",
    borderRadius: "4px",
    maxWidth: 1100,
    marginTop: 35,
    padding: "20px 20px 50px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  header: {
    color: "rgba(33, 33, 33, 0.8)",
    width: "100%",
    textAlign: "center",
    fonStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    padding: "20px 0",
  },
  favoritesBox: {
    width: "90%",
  },
}));

export default function Favoirtes(props) {
  const classes = styles();
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
    // <></>
   <div style={{display:"flex", flexDirection:"column", paddingTop:"200px"}}>
      <h1 style={{textAlign:"center"}}>Search for a city</h1>
      <SearchBar/>
      <br/>
      <h1 style={{textAlign:"center"}}>Or take our Survey to get recommendations!</h1>
      <Button onClick={()=>history.push("/survey")} alt="Take the survey button"   style={{ backgroundColor: '#0074cc', color: 'white', width:"200px", marginLeft:"37%" }}>
            Take the survey
          </Button>
   </div>
  ) : (
    <Container className={classes.root} style={{marginTop: '15rem'}}>
      <div className={classes.header}>Favorite Cities</div>
      <div className={classes.favoritesBox}>
        {cities.map((city) => (
          <FavoriteCityCard key={city.id} cityData={city} />
        ))}
      </div>
    </Container>
  );
}
