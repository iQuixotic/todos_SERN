const path = require("path");
const router = require('express').Router();
const listRoutes = require('./list');
const historyRoutes = require('./history');

// tell the application when to use these routes
router.use('/list', listRoutes);
router.use('/history', historyRoutes);

// if no routes are hit, go to react app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build'));
});

module.exports = router;
