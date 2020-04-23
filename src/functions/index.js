import axios from 'axios';
import { buildQueryString } from './buildQueryString';

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
    .catch((err) => console.log(err));
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
  // const token = localStorage.getItem('okta-token-storage')
  // const claims = JSON.parse(token).idToken.claims;
  let user = await axios.get(
    `https://production-juxta-city-be.herokuapp.com/api/users/${2}`,
  );
  let userData = await user.data;
  context = { ...context, ...userData };
  let favorites = await axios.get(
    `https://production-juxta-city-be.herokuapp.com/api/users/${2}/favorites`,
  );
  for (const favorite of favorites.data) {
    const result = await axios.get(
      `https://junta-test.herokuapp.com/name?id=${favorite.city_id}`,
    );
    context.favorites.push({ id: favorite.city_id, city: result.data });
  }
  return context;
};

const getBestCities = async () => {
  const res = await axios.get('https://junta-test.herokuapp.com/top25');
  return res.data;
};

const getRecomendedCities = async (queryParameters) => {
  let url = 'http://junta-test.herokuapp.com/recommend';
  url = buildQueryString(url, queryParameters);
  const res = await axios.get(url);
  return res.data;
};

export {
  addFavorite,
  removeFavorite,
  createUserContext,
  getCityData,
  getBestCities,
  getRecomendedCities,
};
