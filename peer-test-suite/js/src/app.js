// PEER-AUTOFIX start [findingId=undefined rule=missing-helmet analyzer=autofix ts=1760254111373]
// // entry
// entry
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=ai rule=ai-minimal analyzer=autofix ts=1760254111374]
// const express = require('express');
const express = require('express');
const helmet = require('helmet');
// PEER-AUTOFIX end [findingId=ai]
const insecure = require('./insecure');
// PEER-AUTOFIX start [findingId=ai rule=ai-minimal analyzer=autofix ts=1760254111374]
// const app = express();
const app = express();
app.use(helmet());
// PEER-AUTOFIX end [findingId=ai]

app.use('/', insecure.router);
app.use(express.json());

app.listen(3000, () => {
// PEER-AUTOFIX start [findingId=undefined rule=console-log-in-prod analyzer=autofix ts=1760254111374]
//   console.log('Server listening on 3000');
  console.log('Server listening on 3000');
// PEER-AUTOFIX end [findingId=undefined]
});
