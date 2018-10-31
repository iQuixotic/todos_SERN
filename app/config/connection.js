const secret = require('./secret');
const mysql = require("mysql");

let connection;

// define connection
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: secret.DB_USER,
  password: secret.DB_PASSWORD,
  database: "todos_db"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId + " to DATABASE " + connection.database);
});

// Export connection for our ORM to use.
module.exports = connection;
