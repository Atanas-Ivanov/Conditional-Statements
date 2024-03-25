function evenOrOdd(inout) {
  let num = Number(inout[0]);
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenOrOdd(["19246"]);
