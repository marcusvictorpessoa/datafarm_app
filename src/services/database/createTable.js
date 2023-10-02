import getDatabase from './Sqlite';

export default async function createTable() {
  const query =
    'CREATE TABLE IF NOT EXISTS registers (uuid VARCHAR(36) PRIMARY KEY, id_farm INTEGER NOT NULL, id_field INTEGER NOT NULL, id_reason INTEGER NOT NULL, id_machinery INTEGER NOT NULL, minutes INTEGER NOT NULL, note TEXT, longitude REAL NOT NULL, latitude REAL NOT NULL, name_farm VARCHAR(36) NOT NULL, name_reason VARCHAR(36) NOT NULL, sync INTEGER DEFAULT 0, created_at DATETIME NOT NULL);';
  try {
    const db = await getDatabase();
    db.executeSql(query);
  } catch (error) {
    console.log(error);
  }
}
