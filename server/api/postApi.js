const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/api/posts', async (req, res) => {
  try {
    const result = await Post.find();
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.post('/api/posts', async (req, res) => {
  // const { title, author, text } = req.body;
  const newPost = new Post(req.body);
  try {
    const result = await newPost.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

router.delete('/api/posts/:id', async (req, res) => {
  try {
    const result = await Post.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, err });
  }
});

// router.put('/api/posts/:id/editpost', async (req, res) => {
//   try {
//     const result = await Post.findByIdAndUpdate(req.params.id, { title: req.body.title, author: req.body.author, text: req.body.text });
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ success: false, err });
//   }
// });

module.exports = router;
