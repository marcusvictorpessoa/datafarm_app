import getDatabase from './Sqlite';

export async function create(obj) {
  const db = await getDatabase();
  console.log(obj);
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      //comando SQL modificável
      tx.executeSql(
        'INSERT INTO cars (brand, model, hp) values (?, ?, ?);',
        [obj.brand, obj.model, obj.hp],
        //-----------------------
        (_, {rowsAffected, insertId}) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject('Error inserting obj: ' + JSON.stringify(obj)); // insert falhou
        },
        (_, error) => reject(error), // erro interno em tx.executeSql
      );
    });
  });
}

export async function find(id) {
  const db = await getDatabase();
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      //comando SQL modificável
      tx.executeSql(
        'SELECT * FROM cars WHERE id=?;',
        [id],
        //-----------------------
        (_, {rows}) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject('Obj not found: id=' + id); // nenhum registro encontrado
        },
        (_, error) => reject(error), // erro interno em tx.executeSql
      );
    });
  });
}
