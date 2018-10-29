const router = require('express').Router();
const historyController = require('../controllers/historyController');

// for retrieving history
router.route('/')
    .get(historyController.read)
    
module.exports = router;