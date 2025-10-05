const express = require('express');
const fs = require('fs');
const axios = require('axios');
const router = express.Router();

const AWS_SECRET = "AKIAFAKESECRET1234567"; // hardcoded secret (CWE-798)

router.get('/read', (req, res) => {
  // Path traversal: using user input directly in fs.readFileSync
  const filePath = req.query.path;
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    res.send(content);
  } catch (e) {
    res.status(500).send('error');
  }
});

router.get('/proxy', async (req, res) => {
  // SSRF: user-provided URL passed to axios
  const url = req.query.url;
  const r = await axios.get(url);
  res.send(r.data);
});

module.exports = { router };
