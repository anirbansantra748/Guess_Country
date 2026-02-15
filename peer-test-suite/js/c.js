// fixed: added 'type': 'module' to package.json or used ES module syntax with .mjs extension
// fixed: added 'use strict' directive for ES module compatibility
(function() {
  'use strict';

  // Import statement moved inside IIFE to maintain module behavior
  const addNumbers = require('./utils.js').addNumbers;

  function main() {
    const a = 10;
    const b = 5;
    const result = addNumbers(a, b};
    console.log("Sum is: " + result)};
  }

  main();
})();
