const connection = require("../config/connection.js");

// helper to make question marks for SQL queries
printQuestionMarks = (num) => {
  let arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert to SQL syntax
objToSql = (obj) => {
  let arr = [];

  for (var key in obj) {
    let value = obj[key];

    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key} = ${value}`);
    }
  }
  return arr.toString();
}

// SQL statement functions
const orm = {
  all: (cb) => {
    let queryStr = "SELECT * FROM todos;";
    connection.query(queryStr, (err, result) => {
      if (err) {
        throw err;
      }
      // console.log(cb.toString())
      // console.log(result)
      // return result;
      cb(result);
    });
  },
  create: (cols, vals, cb) => {
    let queryStr = `INSERT INTO todos (${cols.toString()}) 
    VALUES (${printQuestionMarks(vals.length)}) `;

    // queryString += " (";
    // queryString += cols.toString();
    // queryString += ") ";
    // queryString += "VALUES (";
    // queryString += printQuestionMarks(vals.length);
    // queryString += ") ";

    connection.query(queryStr, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {crossed:true, action: brush tooth}
  update: (objColVals, condition, cb) => {
    let queryStr = `UPDATE  todos SET ${objectToSql(objColVals)} 
    WHERE ${condition}`;

    // queryString += " SET ";
    // queryString += objToSql(objColVals);
    // queryString += " WHERE ";
    // queryString += condition;

    connection.query(queryStr, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;