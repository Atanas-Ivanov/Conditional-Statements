function calculateCommission(input) {
  let [city, sales] = input;
  let commissionRate = 0;

  // Проверка за невалиден обем на продажбите (отрицателно число)
  if (sales < 0) {
    return "error";
  }

  switch (city) {
    case "Sofia":
      if (sales <= 500) {
        commissionRate = 0.05;
      } else if (sales <= 1000) {
        commissionRate = 0.07;
      } else if (sales <= 10000) {
        commissionRate = 0.08;
      } else {
        commissionRate = 0.12;
      }
      break;
    case "Varna":
      if (sales <= 500) {
        commissionRate = 0.045;
      } else if (sales <= 1000) {
        commissionRate = 0.075;
      } else if (sales <= 10000) {
        commissionRate = 0.1;
      } else {
        commissionRate = 0.13;
      }
      break;
    case "Plovdiv":
      if (sales <= 500) {
        commissionRate = 0.055;
      } else if (sales <= 1000) {
        commissionRate = 0.08;
      } else if (sales <= 10000) {
        commissionRate = 0.12;
      } else {
        commissionRate = 0.145;
      }
      break;
    default:
      return "error";
  }

  let commission = sales * commissionRate;
  return commission.toFixed(2);
}

console.log(calculateCommission(["Kaspichan", -50])); // error
