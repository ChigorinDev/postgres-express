const express = require('express');
//cross domain request
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const db = require('./server/models/index');
const todos = require('./routers/todos');
const todo = require('./routers/todo');

app.use(cors({ origin: '*' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//get list of todos
app.use('/todos', todos);

//update and delete
app.use('/todo', todo);

module.exports = app;
