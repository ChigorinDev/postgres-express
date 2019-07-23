const Todo = require('../server/models/index').Todo;

module.exports = {
  create(req, res) {
    return Todo.create({
      content: req.body.content,
      checked: req.body.checked
    })
      .then(todo => res.status(201).send(todo))
      .catch(err => res.status(400).send(err));
  }
};
