import getDatabase from './Sqlite';

export default async function createTable() {
  try {
    const db = await getDatabase();
    //tx.executeSql("DROP TABLE cars;");
    ///db.transaction(tx => {
    //tx.executeSql('DROP TABLE cars;');
    //tx.executeSql(
    //  'CREATE TABLE IF NOT EXISTS stopregisters (id INTEGER PRIMARY KEY AUTOINCREMENT, brand TEXT, model TEXT, hp INT);',
    //);
    //});
  } catch (error) {}
}
