function divide(a, b,c) {
  if (b == 0) return "error"; // inconsistent return type (string vs number)
  return a / b;
}

module.exports = { divide };
