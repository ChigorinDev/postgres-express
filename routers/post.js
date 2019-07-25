const express = require('express');
const router = express.Router();
const verifyToken = require('../routers/verifytoken');
// const db = require('../server/models/index');

router.get('/get', verifyToken, (req, res) => {
  res.json({
    posts: {
      title: 'my first post',
      description: 'random text you shouldnt read'
    }
  });
});

module.exports = router;
