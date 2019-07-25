const express = require('express');
const router = express.Router();
const db = require('../server/models/index');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ==============REGISTRATION=================

router.post('/register', async (req, res) => {
  //validate new user
  const { error } = await registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if the user used this email
  const sameEmail = await db.User.findOne({
    where: { email: req.body.email }
  });
  if (sameEmail) return res.status(400).send('This email has been used.');

  //Hash the password   10 - saltRounds by default
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //add new user to database
  const user = new db.User({
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword //instead of req.body.password
  });

  try {
    const savedUser = await user.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// ==============LOGIN=================

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if the user registered
  const logingUser = await db.User.findOne({
    where: { email: req.body.email }
  });
  if (!logingUser) return res.status(400).send('Wrong email');

  //check if the user used wrong password
  const comparedPass = await bcrypt.compare(
    req.body.password,
    logingUser.password
  );
  if (!comparedPass) return res.status(400).send('Wrong password');

  //generate JWT
  const jwtToken = jwt.sign({ id: logingUser.id }, process.env.SECRET_KEY);
  res.header('auth-token', jwtToken).send(jwtToken);
});

module.exports = router;
