function fruitPriceCalculator(input) {
  let [fruit, day, quantity] = input;
  let price = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana":
          price = 2.5;
          break;
        case "apple":
          price = 1.2;
          break;
        case "orange":
          price = 0.85;
          break;
        case "grapefruit":
          price = 1.45;
          break;
        case "kiwi":
          price = 2.7;
          break;
        case "pineapple":
          price = 5.5;
          break;
        case "grapes":
          price = 3.85;
          break;
        default:
          return "error";
      }
      break;
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana":
          price = 2.7;
          break;
        case "apple":
          price = 1.25;
          break;
        case "orange":
          price = 0.9;
          break;
        case "grapefruit":
          price = 1.6;
          break;
        case "kiwi":
          price = 3;
          break;
        case "pineapple":
          price = 5.6;
          break;
        case "grapes":
          price = 4.2;
          break;
        default:
          return "error";
      }
      break;
    default:
      return "error";
  }

  let totalPrice = price * quantity;
  return totalPrice.toFixed(2);
}

console.log(fruitPriceCalculator(["apple", "Tuesday", "2"]));
