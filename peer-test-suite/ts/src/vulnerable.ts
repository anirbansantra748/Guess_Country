// intentionally use any and @ts-ignore to trigger TS analyzer
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// PEER-AUTOFIX start [findingId=undefined rule=any-type analyzer=autofix ts=1760254111316]
// function risky(input: any) {
function risky(input: any) {
// PEER-AUTOFIX end [findingId=undefined]
  // implicit any and usage of eval
  // eslint-disable-next-line no-eval
// PEER-AUTOFIX start [findingId=undefined rule=no-eval analyzer=autofix ts=1760254111316]
//   const l = eval(input);
  const l = eval(input);
// PEER-AUTOFIX end [findingId=undefined]
  return l;
}

export default risky;

// comment
