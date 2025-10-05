// nested loop O(n^2) and sync IO
const fs = require('fs');

const users = new Array(2000).fill(0).map((_,i)=>({id:i, name:'u'+i, email:'e'+i}));

for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < users.length; j++) {
    // expensive concat
    const s = users[i].name + users[j].email;
  }
}

const data = fs.readFileSync('bigfile.txt', 'utf8'); // blocking IO
console.log(data ? 'ok' : 'no');
