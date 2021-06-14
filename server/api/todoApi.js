const express = require('express');
const router = express.Router();

router.get('/api/todos', (req, res) => {
  res.json({ msg: 'All Todos' });
});

module.exports = router;
