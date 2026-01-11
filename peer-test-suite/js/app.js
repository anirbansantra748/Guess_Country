const express = require('express');
const helmet = require('helmet'); // added helmet for security headers
const app = express();

app.use(helmet()); // added helmet middleware for security

// Fixed typo in method name
app.use(express.json());

// Fixed missing next() call and removed console.log
app.use((req, res, next) => {
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);