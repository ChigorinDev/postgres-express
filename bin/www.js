//app entry
require('dotenv').config();
const http = require('http');
const app = require('../app');

const PORT = process.env.PORT || 4040;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
