import axios from 'axios';

const requests = axios.create({
  baseURL: 'http://106.14.212.56:7000',
  timeout: 5000,
});

export const request = function(url, method = 'post', headers = {}, data = {}) {
  let response = requests({ url: url, method: method, headers: headers, data });
  return response;
};

requests.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

requests.interceptors.response.use(response => {
  return response;
});
