import axios from 'axios';
import { buildQueryString } from './buildQueryString';
import jwt_decode from 'jwt-decode';
import { axiosWithAuth } from './axiosWithAuth';

const addFavorite = (userId, cityId) => {
  const object = { user_id: userId, city_id: cityId };
  axiosWithAuth()
    .post(
      `https://production-juxta-city-be.herokuapp.com/api/users/${userId}/favorites`,
      object
    )
    .then((res) => {
      console.log(res, 'favorite completed!');
    })
    .catch((err) => {
      console.log(err);
    });
};

const postProfileRequest = async (userData, userId) => {
  let response = await axiosWithAuth().post(
    `https://production-juxta-city-be.herokuapp.com/api/profile/${userId}`,
    userData
  );
  let responseProfileData = await response.data;

 // console.log(responseProfileData);
};

const deleteProfile = async (userId) => {
  let response = await axiosWithAuth().delete(
    `https://production-juxta-city-be.herokuapp.com/api/profile/${userId}`
  );
  let responseProfileData = await response.data;

  return responseProfileData;
};

const editProfile = async (userId, userData) => {
  let response = await axiosWithAuth().put(
    `https://production-juxta-city-be.herokuapp.com/api/profile/${userId}`,
    userData
  );
  let responseProfileData = await response.data;

  return responseProfileData;
};

const removeFavorite = (userId, cityId) => {
  axiosWithAuth()
    .delete(
      `https://production-juxta-city-be.herokuapp.com/api/users/${userId}/favorites/${cityId}`
    )
    .then((res) => {
      console.log(res, 'unfavorite completed!');
    });
};

const getCityData = async (cityName) => {
  let res = await axios.get(
    `https://junta-test.herokuapp.com/data?city=${cityName}`
  );
  let newCityObj = res.data;
  // this for loop removes the decimal endings that are longer than 2 and adds a comma in the big numbers
  // 0.2321231 => 0.23 and 1293465 => 1,293,465
  // it also makes the values as strings exept the id value 
  for (let x in newCityObj) {
    if (!isNaN(newCityObj[x]) && newCityObj[x] !== newCityObj.id) {
      let numberValue = Math.floor(newCityObj[x] * 100) / 100;
      newCityObj[x] = numberValue.toLocaleString();
    }
  }
//  console.log(newCityObj,"newCityObj")
  return newCityObj;
};

const createUserContext = async () => {
  const token = localStorage.getItem('token');
  const userId = jwt_decode(token).userid;

  let context = {
    favorites: []
  };

  let user = await axiosWithAuth().get(
    `https://production-juxta-city-be.herokuapp.com/api/users/${userId}`
  );
  let userData = await user.data;
  context = { ...context, ...userData };
  let favorites = await axiosWithAuth().get(
    `https://production-juxta-city-be.herokuapp.com/api/users/${userId}/favorites`
  );
  for (const favorite of favorites.data) {
    const result = await axiosWithAuth().get(
      `https://junta-test.herokuapp.com/name?id=${favorite.city_id}`
    );
    context.favorites.push({ id: favorite.city_id, city: result.data });
  }
  return context;
};

const createProfileContext = async () => {
  const token = localStorage.getItem('token');
  const userId = jwt_decode(token).userid;

  let response = await axiosWithAuth().get(
    `https://production-juxta-city-be.herokuapp.com/api/profile/${userId}/all`
  );
  let responseProfileData = await response.data;
  
  localStorage.setItem("profilePicture", responseProfileData[0].image_url)

  return responseProfileData;
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
    `https://junta-test.herokuapp.com/search?search=${chars}`
  );
  return res.data;
};

function randomCity(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export {
  addFavorite,
  removeFavorite,
  createUserContext,
  getCityData,
  getBestCities,
  getRecomendedCities,
  getCityArray,
  postProfileRequest,
  createProfileContext,
  editProfile,
  deleteProfile,
  randomCity
};
