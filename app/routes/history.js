const router = require('express').Router();
const historyController = require('../controllers/historyController');

// for retrieving history
router.route('/')
    .get(historyController.read)
    .post(historyController.create)


router.route('/:id')
    .delete(historyController.delete)

module.exports = router;