const express = require('express');
const router = express.Router();
const db = require('../server/models/index');

router.post('/add', (req, res) => {
  const { content, checked } = req.body;

  db.Todo.create({
    content,
    checked
  })
    .then(() => res.redirect('/todos'))
    .catch(err => console.log(err));
});

router.put('/:id', async (req, res) => {
  const todoStatus = req.body[0].checked;
  const todo = await db.Todo.update(
    {
      checked: !todoStatus
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  return res.status(201).json({
    error: false,
    message: 'todo has been updated.'
  });
});

router.delete('', async (req, res) => {
  console.log(req.query.id);
  const deletedTodo = await db.Todo.destroy({
    where: {
      id: req.query.id
    }
  });
  return res.status(201).json({
    error: false,
    message: 'todo has been delete.'
  });
});

module.exports = router;
