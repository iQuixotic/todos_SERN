// const mysql = require('mysql');
// const Schema = mysql.Schema;
const orm = require("../config/orm.js");

let ToDoList = {
  all: function(cb) {
    orm.all((res) => {
      cb(res);
      // console.log('this is ', res)
      console.log(cb.toString(), 'cb')
      console.log(res, 'res')

    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("users", cols, vals, (res) => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("users", objColVals, condition, (res) => {
      cb(res);
    });
  }
};

module.exports = ToDoList;