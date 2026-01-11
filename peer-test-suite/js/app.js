
const express = require('express');
const app = express();

// Simple Error: Typo in method name
app.use(express.jsn());

// High Level Error: Middleware execution flow interruption
// This middleware does not call next() and does not send a response, 
// causing the request to hang indefinitely until timeout.
app.use((req, res, next) => {
  console.log("Logging request...");
  // Missing next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
