function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let price = 0;
  let destination = "";
  let country = "";

  if (budget <= 100) {
    country = "Bulgaria";
    switch (season) {
      case "summer":
        price = budget * 0.3;
        destination = "Camp";
        break;
      case "winter":
        price = budget * 0.7;
        destination = "Hotel";
        break;
    }
  } else if (budget <= 1000) {
    country = "Balkans";
    switch (season) {
      case "summer":
        price = budget * 0.4;
        destination = "Camp";
        break;
      case "winter":
        price = budget * 0.8;
        destination = "Hotel";
        break;
    }
  } else {
    country = "Europe";
    price = budget * 0.9;
    destination = "Hotel";
  }

  console.log(`Somewhere in ${country}`);
  console.log(`${destination} - ${price.toFixed(2)}`);
}

journey(["50", "summer"]);
