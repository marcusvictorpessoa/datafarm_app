import api from '../api';

export async function loginRequest(uri, body) {
  const response = await api.post(uri, body);
  return response.data;
}

export async function resourcesRequest(uri, token) {
  api.interceptors.request.use(
    config => {
      config.headers['TokenAuthorization'] = token;

      return config;
    },
    err => {
      Promise.reject(err);
    },
  );
  const response = await api.get(uri);
  return response.data;
}

export async function syncsRequest(uri, token, body) {
  api.interceptors.request.use(
    config => {
      config.headers['TokenAuthorization'] = token;

      return config;
    },
    err => {
      Promise.reject(err);
    },
  );
  const response = await api.post(uri, body);
  return response.data;
}
