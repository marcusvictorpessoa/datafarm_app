import {clearString, getData, storeData} from './storage';

const RESOURCES = 'RESOURCES';

export async function storeResources(payload) {
  await storeData(RESOURCES, payload);
}

export async function getResourcesOffline() {
  const data = await getData(RESOURCES);

  return data;
}

export async function clearResources() {
  await clearString(RESOURCES);
}
