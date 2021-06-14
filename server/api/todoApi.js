const express = require('express');
const router = express.Router();

router.get('/api/todos', (req, res) => {
  res.json({ msg: 'All Todos' });
});

router.post('api/todos/new', (req, res) => {
  console.log('post gautas body', req.body);
});

module.exports = router;
