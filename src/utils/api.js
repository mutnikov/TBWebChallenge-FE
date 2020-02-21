import axios from 'axios';


const METHOD = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
};

const request = async function (options, token, baseUrl) {
  let authHeader = '';
  if (token) {
    authHeader = token;
  }

  console.log('baseUrl', baseUrl);
  const client = axios.create({
    baseURL: baseUrl || process.env.REACT_APP_API_URL,
    headers: {
      Authorization: authHeader,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

  });

  const onSuccess = function (response) {
    return { data: response.data, accessToken: response.headers.authorization };
  };

  const onError = function (error) {
    console.log('Request Failed:', error.config);

    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Data:', error.response.data);
      console.log('Headers:', error.response.headers);
    } else {
      console.debug('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };


  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default {
  async get(url, baseUrl) {
    return request({
      url,
      method: METHOD.GET,
    }, null, baseUrl);
  },
  async post(url, params, baseUrl) {
    return request({
      url,
      method: METHOD.POST,
      data: params,
    }, null, baseUrl);
  },
  async getAuth(url, token) {
    return request({
      url,
      method: METHOD.GET,
    }, token);
  },
  async postAuth(url, params, token, customHeaders = {}) {
    return request({
      url,
      method: METHOD.POST,
      data: params,
      headers: customHeaders,

    }, token);
  },
};
