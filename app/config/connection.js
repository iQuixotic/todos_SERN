const secret = require('./secret');
// const mysql = require("mysql");

// // if deployed
// if(process.env.JAWSDB_URL) {
//   myConnection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {

//   // if using local connection
//   myConnection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: secret.DB_USER,
//     password: secret.DB_PASSWORD,
//     database: "example_db"
// });
// };

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
// });

// module.exports = connection;


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
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
