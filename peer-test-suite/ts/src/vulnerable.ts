// intentionally use any and @ts-ignore to trigger TS analyzer
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function risky(input: any) {
  // implicit any and usage of eval
  // eslint-disable-next-line no-eval
  const l = eval(input);
  return l;
}

export default risky;

// comment
