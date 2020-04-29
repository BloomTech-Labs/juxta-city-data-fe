import axios from 'axios';
import { buildQueryString } from './buildQueryString';
import jwt_decode from 'jwt-decode';
import {axiosWithAuth} from './axiosWithAuth';

const addFavorite = (userId, cityId) => {
  const object = { user_id: userId, city_id: cityId };
  axios
    .post(
      `https://production-juxta-city-be.herokuapp.com/api/users/${userId}/favorites`,
      object,
    )
    .then((res) => {
      console.log(res, 'favorite completed!');
    })
    .catch((err) => {
      console.log(err);
    });
};

const removeFavorite = (userId, cityId) => {
  axios
    .delete(
      `https://production-juxta-city-be.herokuapp.com/api/users/${userId}/delete/${cityId}`,
    )
    .then((res) => {
      console.log(res, 'unfavorite completed!');
    });
};

const getCityData = async (cityName) => {
  let res = await axios.get(
    `https://junta-test.herokuapp.com/data?city=${cityName}`,
  );
  return res.data;
};

const createUserContext = async () => {
  let context = {
    favorites: [],
  };
  const token = localStorage.getItem('token');
  const userId = jwt_decode(token).userid;
  let user = await axios.get(`https://production-juxta-city-be.herokuapp.com/api/users/${userId}`, axiosWithAuth());
  let userData = await user.data;
  context = { ...context, ...userData };
  let favorites = await axios.get(`https://production-juxta-city-be.herokuapp.com/api/users/${userId}/favorites`, axiosWithAuth());
  for (const favorite of favorites.data) {
    const result = await axios.get(`https://junta-test.herokuapp.com/name?id=${favorite.city_id}`, axiosWithAuth());
    context.favorites.push({ id: favorite.city_id, city: result.data });
  }
  return context;
};

const getBestCities = async () => {
  const res = await axios.get('https://junta-test.herokuapp.com/top25');
  return res.data;
};

const getRecomendedCities = async (queryParameters) => {
  let url = 'https://junta-test.herokuapp.com/recommend';
  url = buildQueryString(url, queryParameters);
  const res = await axios.get(url);
  return res.data;
};

const getCityArray = async (chars) => {
  let res = await axios.get(
    `https://junta-test.herokuapp.com/search?search=${chars}`,
  );
  return res.data;
};

export {
  addFavorite,
  removeFavorite,
  createUserContext,
  getCityData,
  getBestCities,
  getRecomendedCities,
  getCityArray,
};
