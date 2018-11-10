const router = require('express').Router();
const listController = require('../controllers/listController');

// CRUD for individual list items
router.route('/')
    .get(listController.read)
    .post(listController.create)

router.route('/:id')
    .post(listController.update)
    .delete(listController.delete)

    
module.exports = router;