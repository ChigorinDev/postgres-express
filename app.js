const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('./server/models/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('*', (req, res) =>
//   res.status(200).send({
//     message: 'Starting express server'
//   })
// );

//get a list of todos from the db
app.get('/todo', (req, res) => {
  res.send({ type: 'GET' });
});

app.get('/todos', async (req, res) => {
  const todos = await db.Todo.findAll({});
  res.send(todos);
});

//add new todo to the db
app.post('/todo', (req, res) => {
  // console.log(req.body);
  res.send({ type: 'POST' });
});

//upgrade todo in the list
app.put('/todo/:id', (req, res) => {
  res.send({ type: 'PUT' });
});

//delete todo from the list
app.delete('/todo/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

module.exports = app;
