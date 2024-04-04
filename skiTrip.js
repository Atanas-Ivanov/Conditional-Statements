function skiVacation(input) {
  let days = Number(input[0]);
  let roomType = input[1];
  let rating = input[2];

  let pricePerNight = 0;

  switch (roomType) {
    case "room for one person":
      pricePerNight = 18;
      break;
    case "apartment":
      pricePerNight = 25;
      break;
    case "president apartment":
      pricePerNight = 35;
      break;
  }

  let totalNights = days - 1;
  let totalCost = pricePerNight * totalNights;

  let discount = 0;

  if (totalNights > 15) {
    switch (roomType) {
      case "apartment":
        discount = 0.5;
        break;
      case "president apartment":
        discount = 0.2;
        break;
    }
  } else if (totalNights >= 10 && totalNights <= 15) {
    switch (roomType) {
      case "apartment":
        discount = 0.35;
        break;
      case "president apartment":
        discount = 0.15;
        break;
    }
  }

  let finalPrice = totalCost - totalCost * discount;

  if (rating === "positive") {
    finalPrice += finalPrice * 0.25;
  } else {
    finalPrice -= finalPrice * 0.1;
  }

  console.log(finalPrice.toFixed(2));
}

skiVacation(["14", "apartment", "positive"]);
