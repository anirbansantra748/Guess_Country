// PEER-AUTOFIX start [findingId=undefined rule=no-unused-vars analyzer=autofix ts=1760254111364]
// function divide(a, b,c) {
function divide(a, b,c) {
// PEER-AUTOFIX end [findingId=undefined]
// PEER-AUTOFIX start [findingId=undefined rule=eqeqeq analyzer=autofix ts=1760254111364]
//   if (b == 0) return "error"; // inconsistent return type (string vs number)
  if (b == 0) return "error"; // inconsistent return type (string vs number)
// PEER-AUTOFIX end [findingId=undefined]
  return a / b;
}

module.exports = { divide };
