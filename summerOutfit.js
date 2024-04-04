function summerOutfit(input) {
  let degrees = Number(input[0]);
  let partOfDay = input[1];
  let clothes = "";
  let shoes = "";
  switch (partOfDay) {
    case "Morning":
      if (degrees >= 10 && degrees <= 18) {
        clothes = "Sweatshirt";
        shoes = "Sneakers";
      } else if (degrees > 18 && degrees <= 24) {
        clothes = "Shirt";
        shoes = "Moccasins";
      } else {
        clothes = "T-Shirt";
        shoes = "Sandals";
      }
      break;
    case "Afternoon":
      if (degrees >= 10 && degrees <= 18) {
        clothes = "Shirt";
        shoes = "Moccasins";
      } else if (degrees > 18 && degrees <= 24) {
        clothes = "T-Shirt";
        shoes = "Sandals";
      } else {
        clothes = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    case "Evening":
      clothes = "Shirt";
      shoes = "Moccasins";
      break;
  }
  console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`);
}
summerOutfit(["22", "Afternoon"]);
