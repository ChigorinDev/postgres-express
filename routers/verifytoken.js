const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    //so that I could find info by user ID
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};
