import React, { useContext, useState, useEffect } from "react";
import emptyheart from "../../assets/emptyheart.png";
import fullheart from "../../assets/fullheart.png";
import UserContext from "../../contexts/UserContext";
import ModalContext from "../../contexts/ModalContext";
import {
  addFavorite,
  removeFavorite,
  createUserContext,
} from "../../functions";
import ModalSignIn from "../auth/ModalSignIn";
import { useHistory } from "react-router-dom";

export default function FavoriteIcon(props) {
  const [favorited, setFavorited] = useState(false);
  const { setUserData, userData } = useContext(UserContext);
  const { modal, setModal } = useContext(ModalContext);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {createUserContext().then((res) => setUserData(res))}
  }, [setUserData]);

  useEffect(() => {
    if (userData.favorites) {
      // city.id is type number and props.cityData.id is type string and we can't use ===
      userData.favorites.some((city) => city.id == props.cityData.id) ? setFavorited(true) : setFavorited(false)}
  }, [userData.favorites, props.cityData.id]);

  const handleClick = (e) => {
    e.preventDefault();
    if (favorited && userData.id) {
      removeFavorite(userData.id, props.cityData.id);
      setFavorited(false);
    } else if (!favorited && userData.id) {
      addFavorite(userData.id, props.cityData.id);
      setFavorited(true);
    } else {
      setModal(true)
      // props.history.push("/signin")
    }
  };
  
  return (
    <>
    <img className="heart-icon" src={favorited ? fullheart : emptyheart}onClick={handleClick}alt="heart icon"/>
    <ModalSignIn modal={modal} setModal={setModal} history={history}/>
    </> 
  );
};
