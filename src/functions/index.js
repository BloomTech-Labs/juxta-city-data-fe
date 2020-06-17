import axios from 'axios';
import { buildQueryString } from './buildQueryString';
import jwt_decode from 'jwt-decode';
import {axiosWithAuth} from './axiosWithAuth';

// const url = "https://cors-anywhere.herokuapp.com/"

const addFavorite = (userId, cityId) => {
  const object = { user_id: userId, city_id: cityId };
  axiosWithAuth()
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

const addUserRequest = (userData, userId) => {
  console.log(userData)
  axiosWithAuth()
    .post(`https://production-juxta-city-be.herokuapp.com/api/profile/${userId}`, userData)
    .then((res) => {
      console.log(res)
    })
    .catch(err => {
      console.log("error", err);
    })
}

const getUserData = (userId) => {
  axiosWithAuth()
    .get(`https://production-juxta-city-be.herokuapp.com/api/profile/${userId}`)
    .then(res => {
      console.log("SENT USER RETURNS!", res.data)
    })
    .catch(err => {
      console.log("Somethings Up!", err);
    })
}

const removeFavorite = (userId, cityId) => {
  axiosWithAuth()
    .delete(
      `https://production-juxta-city-be.herokuapp.com/api/users/${userId}/favorites/${cityId}`,
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
  let user = await axiosWithAuth().get(`https://production-juxta-city-be.herokuapp.com/api/users/${userId}`);
  let userData = await user.data;
  context = { ...context, ...userData };
  let favorites = await axiosWithAuth().get(`https://production-juxta-city-be.herokuapp.com/api/users/${userId}/favorites`);
  for (const favorite of favorites.data) {
    const result = await axiosWithAuth().get(`https://junta-test.herokuapp.com/name?id=${favorite.city_id}`);
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
  addUserRequest,
  getUserData
};
