// fixed: added missing closing parenthesis for require call
// fixed: removed extra closing brace for function argument
// fixed: replaced string concatenation with template literal
(function() {
  'use strict';

  const addNumbers = require('./utils.js').addNumbers;

  function main() {
    const a = 10;
    const b = 5;
    const result = addNumbers(a, b); // fixed: removed extra closing brace
    console.log(`Sum is: ${result}`); // fixed: replaced string concatenation with template literal
  }

  main();
})();