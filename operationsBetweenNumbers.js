function operationsBetweenNumbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];
  let result = 0;
  let check = "";
  if (operator === "+") {
    result = n1 + n2;
    if (result % 2 === 0) {
      check = "even";
    } else {
      check = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${check}`);
  } else if (operator === "-") {
    result = n1 - n2;
    if (result % 2 === 0) {
      check = "even";
    } else {
      check = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${check}`);
  } else if (operator === "*") {
    result = n1 * n2;
    if (result % 2 === 0) {
      check = "even";
    } else {
      check = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${check}`);
  } else if (operator === "/") {
    if (n2 === 0) {
      console.log(`Cannot divide ${n1} by zero `);
    } else {
      result = (n1 / n2).toFixed(2);
      console.log(`${n1} ${operator} ${n2} = ${result} `);
    }
  } else if (operator === "%") {
    result = n1 % n2;
    console.log(`${n1} ${operator} ${n2} = ${result} `);
  }
}
operationsBetweenNumbers(["10", "0", "/"]);
