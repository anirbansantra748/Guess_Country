const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000); // added newline at end of file