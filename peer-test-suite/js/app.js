// entry
const express = require('express');
const insecure = require('./insecure');
const app = express();

app.use('/', insecure.router);
app.use(express.json());

app.listen(3000, () => {
  console.log('Server listening on 3000');
});
