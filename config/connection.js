const mysql = require("mysql");
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Minnie12345!',
    database: 'burgers_db'
});

connection.connect();

module.exports = connection;
  