import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded/auth.json",
      Authorization: `${token}`,
    },
  });
};
