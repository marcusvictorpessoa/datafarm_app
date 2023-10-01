import {clearString, getString, storeString} from './storage';

const TOKEN = 'TOKEN';

export async function getToken() {
  const tkn = await getString(TOKEN);

  return tkn;
}

export async function setToken(token_value) {
  await storeString(TOKEN, token_value);
}

export async function clearToken() {
  await clearString(TOKEN);
}
