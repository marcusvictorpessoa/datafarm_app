import {openDatabase} from 'react-native-sqlite-storage';

export default async function getDatabase() {
  const localDatabase = await openDatabase({
    name: 'localdb.db',
    location: 'default',
  });
  return localDatabase;
}
