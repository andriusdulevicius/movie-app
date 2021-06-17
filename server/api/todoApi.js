const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/api/todos', async (req, res) => {
  try {
    const result = await Todo.find();
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.post('/api/todos/new', async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    const result = await newTodo.save();
    res.json({ success: true, result });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

router.delete('/api/todos/:id', async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

//PVZ senu budu apdoroti su THEN:
// router.patch('/api/todos/:id/check', (req, res) => {
//   const doneStatus = req.body.isDone;

//   Todo.findByIdAndUpdate(req.params.id, { isDone: doneStatus })
//     .then((result) => res.json(result))
//     .catch((err) => res.status(500).json({ success: false, err }));
// });

router.patch('/api/todos/:id/check', async (req, res) => {
  const doneStatus = req.body.isDone;
  try {
    const result = await Todo.findByIdAndUpdate(req.params.id, { isDone: doneStatus });
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.patch('/api/todos/:id/favCheck', async (req, res) => {
  const favStatus = req.body.isFavourite;
  try {
    const result = await Todo.findByIdAndUpdate(req.params.id, { isFavourite: favStatus });
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.put('/api/todos/:id/editTodo', async (req, res) => {
  try {
    const result = await Todo.findByIdAndUpdate(req.params.id, { title: req.body.title, isEditOn: req.body.isEditOn });
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

module.exports = router;
