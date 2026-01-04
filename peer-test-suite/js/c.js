import { addNumbers } from "./utils.js";

function main() {
  const a = 10;
  const b = 5;
  const result = addNumbers(a, b);
  console.log("Sum is: " + result); // fixed: changed 'results' to 'result'
}

main();