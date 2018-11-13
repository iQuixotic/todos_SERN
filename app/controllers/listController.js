const db = require('../models/queries');
const connection = require('../config/connection');

module.exports = {
    
    // CREATE a new db entry for users
    create: (req, res) => {

      connection.query(db.create(req.body.action), (error, results, fields) => {
        if (error) throw error;
        // res.send(results)
        res.send({ obj: results })
      })

    },

    // READ all users
    read: (req, res) => { 
      
      connection.query(db.getAll(), (error, results, fields) => {
        if (error) throw error;
        // res.send(results)
        res.send({ obj: results })
      })
    },

    // UPDATE list item
    update: (req, res) => {
      console.log('sonething something something dark side')
      console.log(req.params.id, req.body)
      connection.query(db.update(req.params.id, req.body.crossed), (error, results, fields) => {
        if (error) throw error;
        res.send({ obj: results })
      })
      },

    // DELETE
    delete: (req, res) => {
      console.log('this is THE DELETE THING', req.params.id, req.body)
      connection.query(db.delete(req.params.id, req.body.crossed), (error, results, fields) => {
        if (error) throw error;
        res.send({ obj: results })
      })
      }
}