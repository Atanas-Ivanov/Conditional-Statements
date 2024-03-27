function godzillaVsKong(input) {
  let movieBudget = Number(input[0]);
  let actorsNumber = Number(input[1]);
  let clothesPricePerActor = Number(input[2]);

  let decorPrice = movieBudget * 0.1;
  let clothesPrice = actorsNumber * clothesPricePerActor;
  let clothesPriceWithDiscount = clothesPrice - clothesPrice * 0.1;

  if (actorsNumber > 150) {
    clothesPrice = clothesPriceWithDiscount;
  } else clothesPrice = clothesPrice;

  let movieCost = decorPrice + clothesPrice;

  let moneyLeft = (movieBudget - movieCost).toFixed(2);
  let moneyLeft2 = (movieCost - movieBudget).toFixed(2);

  if (movieCost > movieBudget) {
    console.log(`Not enough money!
Wingard needs ${moneyLeft2} leva more.
        `);
  } else {
    console.log(`Action!
Wingard starts filming with ${moneyLeft} leva left.
        `);
  }
}
godzillaVsKong(["15437.62", "186", "57.99"]);
