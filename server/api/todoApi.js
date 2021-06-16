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

router.delete('/api/todos/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ success: false, err }));
});
router.patch('/api/todos/:id/check', (req, res) => {
  const doneStatus = req.body.isDone;

  Todo.findByIdAndUpdate(req.params.id, { isDone: doneStatus })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ success: false, err }));
});
router.patch('/api/todos/:id/favCheck', (req, res) => {
  const favStatus = req.body.isFavourite;
  Todo.findByIdAndUpdate(req.params.id, { isFavourite: favStatus })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ success: false, err }));
});

router.put('/api/todos/:id/editTodo', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, { title: req.body.title, isEditOn: req.body.isEditOn })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ success: false, err }));
});

module.exports = router;
