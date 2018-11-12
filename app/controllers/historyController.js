const db = require('../models/queries');
const connection = require('../config/connection');

module.exports = {
    
    // CREATE a new db 
    create: (req, res) => {
        console.log(req.body)
        console.log('i have made it all the WAY HERE')

      connection.query(db.createHistory(req.body.id, req.body.action), (error, results, fields) => {
        if (error) throw error;
        // res.send(results)
        res.send({ obj: results })
      })
    },

      // READ all users
      read: (req, res) => { 
      
        connection.query(db.getHistory(), (error, results, fields) => {
          if (error) throw error;
          res.send({ obj: results })
        })
      },

}