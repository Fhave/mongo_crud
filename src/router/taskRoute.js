const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTask);
router.post('/', taskController.addTask);
router.put("/:id", taskController.updateTask)
router.delete('/:id', taskController.deleteTask);

module.exports = router;