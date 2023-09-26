import api from '../api';

export async function loginRequest(uri, body) {
  const response = await api.post(uri, body);
  return response.data;
}
