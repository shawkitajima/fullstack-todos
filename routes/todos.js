const express = require('express');
const todosCtrl = require('../controllers/todos');
const router = express.Router();

router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);
router.put('/:id', todosCtrl.update);
router.delete('/:id', todosCtrl.delete);

module.exports = router;