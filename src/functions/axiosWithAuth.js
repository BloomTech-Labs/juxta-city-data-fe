import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://production-juxta-city-be.herokuapp.com',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
};
