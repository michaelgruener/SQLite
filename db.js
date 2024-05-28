import sqlite3 from 'sqlite3';
sqlite3.verbose();


  const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  });


// let sql = `CREATE TABLE users (
//     id INTEGER PRIMARY KEY,
//     name,
//     username,)`

// let sql= `INSERT into users(name, username) VALUES('Michi', 'MIchis Email')`;
// let sql= `SELECT * FROM users`;
// sql= `DELETE FROM users WHERE name='John'`;

  //   db.all(sql, (err, rows)=> {
  //     if(err) return console.error(err.message);
  //     rows.forEach(row => console.log(row));
  // });

export default db;