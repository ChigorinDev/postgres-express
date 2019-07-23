const express = require('express');
const router = express.Router();
const db = require('../server/models/index');

router.get('/', async (req, res) => {
  const todoList = await db.Todo.findAll({});
  res.send(todoList);
  // db.Todo.findAll({})
  //   .then(todos => res.send(todos))
  //   .catch(err => console.log(err));
});

module.exports = router;
