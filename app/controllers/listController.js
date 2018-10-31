const db = require('../models/ToDoList');
const connection = require('../config/connection');

// var express = require("express");
// var router = express.Router();

module.exports = {
    
    // CREATE a new db entry for users
    create: (req, res) => {
        db.create(["crossed", "action"], 
        [req.body.crossed, req.body.action], 
        (result) => {
          // Send back the ID
          res.json({ id: result.insertId });
        });
    },

    // READ all users
    read: (req, res) => { 
      // connection.connect();

      connection.query('SELECT * FROM todos', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
      })
  
      // connection.end();
  // }
    },

    // UPDATE list item
    update: (req, res) => {
        let id = `id = ${req.params.id}`;
        db.update(
          {
            crossed: req.body.crossed,
            action: req.body.action
          },
          id,
          (result) => {
            if (result.changedRows === 0) {
              return res.status(404).end();
            }
            res.status(200).end();      
          }
        );
      },

    // DELETE
    delete: (req, res) => {
      let id = `id = ${req.params.id}`;
      db.delete(
        id
      );
    }

}