import getDatabase from './Sqlite';

export async function insertData(obj) {
  try {
    const db = await getDatabase();
    const values = [
      obj?.uuid,
      obj?.idFarm,
      obj?.idField,
      obj?.idMachinery,
      obj?.idReason,
      obj?.minutes,
      obj?.note,
      obj?.longitude,
      obj?.latitude,
      obj?.farmName,
      obj?.reasonName,
      obj?.createdAt,
    ];

    const query =
      'INSERT INTO registers (uuid, id_farm, id_field, id_machinery, id_reason, minutes, note, longitude, latitude, name_farm, name_reason, created_at) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';

    await db.executeSql(query, values);
  } catch (error) {
    throw new Error('falha ao adicionar dados no database');
  }
}

export async function getAllData() {
  const db = await getDatabase();
  query = 'SELECT * FROM registers ORDER BY created_at DESC;';
  try {
    const registers = [];
    const results = await db.executeSql(query);

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        registers.push(result.rows.item(index));
      }
    });

    return registers;
  } catch (error) {
    throw new Error('falha ao ler dados do database');
  } finally {
  }
}

export async function clearAllData() {
  const db = await getDatabase();
  query = 'DELETE FROM registers;';
  try {
    const result = await db.executeSql(query);
  } catch (error) {
    throw new Error('falha ao limpar dados do database');
  } finally {
  }
}
