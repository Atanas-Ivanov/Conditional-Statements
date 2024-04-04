function cinema(input) {
  let type = input[0];
  let rowsCount = Number(input[1]);
  let columCount = Number(input[2]);
  let income = 0;
  if (type === "Premiere") {
    income = rowsCount * columCount * 12;
  } else if (type === "Normal") {
    income = rowsCount * columCount * 7.5;
  } else if (type === "Discount") {
    income = rowsCount * columCount * 7.5;
  }
  console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
