// nested loop O(n^2) and sync IO
const fs = require('fs');

// PEER-AUTOFIX start [findingId=undefined rule=missing-null-check analyzer=autofix ts=1759730548273]
// const users = new Array(2000).fill(0).map((_,i)=>({id:i, name:'u'+i, email:'e'+i}));
const users = new Array(2000).fill(0).map((_,i)=>({id:i, name:'u'+i, email:'e'+i}));
// PEER-AUTOFIX end [findingId=undefined]

// PEER-AUTOFIX start [findingId=undefined rule=nested-loops analyzer=autofix ts=1759730548273]
// for (let i = 0; i < users.length; i++) {
for (let i = 0; i < users.length; i++) {
// PEER-AUTOFIX end [findingId=undefined]
  for (let j = 0; j < users.length; j++) {
    // expensive concat
// PEER-AUTOFIX start [findingId=undefined rule=no-unused-vars analyzer=autofix ts=1759730548273]
//     const s = users[i].name + users[j].email;
    const s = users[i].name + users[j].email;
// PEER-AUTOFIX end [findingId=undefined]
  }
}

// PEER-AUTOFIX start [findingId=undefined rule=path-traversal analyzer=autofix ts=1759730548273]
// const data = fs.readFileSync('bigfile.txt', 'utf8'); // blocking IO
const data = fs.readFileSync('bigfile.txt', 'utf8'); // blocking IO
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=undefined rule=console-log-in-prod analyzer=autofix ts=1759730548273]
// console.log(data ? 'ok' : 'no');
console.log(data ? 'ok' : 'no');
// PEER-AUTOFIX end [findingId=undefined]
