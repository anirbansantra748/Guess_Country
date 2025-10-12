// PEER-AUTOFIX start [findingId=undefined rule=missing-helmet analyzer=autofix ts=1760254111312]
// const express = require('express');
const express = require('express');
// PEER-AUTOFIX end [findingId=undefined]
const fs = require('fs');
// PEER-AUTOFIX start [findingId=ai rule=ai-minimal analyzer=autofix ts=1760254111312]
// const axios = require('axios');
const axios = require('axios');
const path = require('path');
// PEER-AUTOFIX end [findingId=ai]
// PEER-AUTOFIX start [findingId=undefined rule=new-cap analyzer=autofix ts=1760254111312]
// const router = express.Router();
const router = express.Router();
// PEER-AUTOFIX end [findingId=undefined]

// PEER-AUTOFIX start [findingId=undefined rule=secret-aws-access-key analyzer=autofix ts=1760254111312]
// const AWS_SECRET = "AKIAFAKESECRET1234567"; // hardcoded secret (CWE-798)
const AWS_SECRET = "AKIAFAKESECRET1234567"; // hardcoded secret (CWE-798)
// PEER-AUTOFIX end [findingId=undefined]

router.get('/read', (req, res) => {
  // Path traversal: using user input directly in fs.readFileSync
  const filePath = req.query.path;
  try {
// PEER-AUTOFIX start [findingId=undefined rule=path-traversal analyzer=autofix ts=1760254111312]
//     const content = fs.readFileSync(filePath, 'utf-8');
    const content = fs.readFileSync(filePath, 'utf-8');
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=ai rule=ai-minimal analyzer=autofix ts=1760254111312]
//     res.send(content);
    const content = await fs.promises.readFile(filePath, 'utf-8');
// PEER-AUTOFIX end [findingId=ai]
// PEER-AUTOFIX start [findingId=undefined rule=no-unused-vars analyzer=autofix ts=1760254111312]
//   } catch (e) {
  } catch (e) {
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=undefined rule=missing-null-check analyzer=autofix ts=1760254111312]
//     res.status(500).send('error');
    res.status(500).send('error');
// PEER-AUTOFIX end [findingId=undefined]
  }
});

router.get('/proxy', async (req, res) => {
  // SSRF: user-provided URL passed to axios
  const url = req.query.url;
// PEER-AUTOFIX start [findingId=undefined rule=ssrf-user-controlled-url analyzer=autofix ts=1760254111312]
//   const r = await axios.get(url);
  const r = await axios.get(url);
// PEER-AUTOFIX end [findingId=undefined]
  res.send(r.data);
});

module.exports = { router };
