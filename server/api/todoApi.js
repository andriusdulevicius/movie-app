const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/api/todos', (req, res) => {
  Todo.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ success: false, err }));
});

router.post('/api/todos/new', (req, res) => {
  const newTodo = new Todo(req.body);

  newTodo
    .save()
    .then((result) => res.json({ success: true, result }))
    .catch((err) => res.status(500).json({ success: false, err }));
});

module.exports = router;
