// required external packages
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// database and app 
// const mongoose = require('mongoose');
const app = express();
const routes = require('./app/routes');
const insp = require('./sql/inspiration');
const globals = require('./app/config/globals');

// use morgan, bodyParser, cors, routes
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(routes);

// connect to the database 
// mongoose.connect(connectMe, {useNewUrlParser: true});
// mongoose.Promise = global.Promise;

// - - - - - - - - - - - - - - - - - - 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '/client/build')));
}

// start server
app.listen(globals.PORT, () => {
  console.log(insp.gen())
  console.log("You know I'll always be there for you on port " + globals.PORT);
});
 
// - - - - - - - - - - - - - - - - - - 
// error handling
app.use((next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});