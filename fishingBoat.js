function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let peopleCount = Number(input[2]);
  let price = 0;
  switch (season) {
    case "Spring":
      price = 3000;
      break;
    case "Summer":
    case "Autumn":
      price = 4200;
      break;
    case "Winter":
      price = 2600;
      break;
  }
  if (peopleCount <= 6) {
    price = price * 0.9;
  } else if (peopleCount >= 7 && peopleCount <= 11) {
    price = price * 0.85;
  } else if (peopleCount >= 12) {
    price = price * 0.75;
  }
  if (peopleCount % 2 === 0 && season != "Autumn") {
    price = price * 0.95;
  }
  if (budget > price) {
    console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
  } else if (price > budget) {
    console.log(
      `Not enough money! You need ${(price - budget).toFixed(2)} leva.`
    );
  }
}
fishingBoat(["3600", "Autumn", "6"]);
