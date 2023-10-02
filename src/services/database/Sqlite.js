import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

export default async function getDatabase() {
  const localDatabase = await openDatabase({
    name: 'localdb.db',
    location: 'default',
  });
  return localDatabase;
}
