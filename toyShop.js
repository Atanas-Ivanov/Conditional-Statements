function toyShop(input) {
  let holidayPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let bearsCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let puzzleSinglePrice = 2.6;
  let dollsSinglePrice = 3;
  let bearSinglePrice = 4.1;
  let minionSinglePrice = 8.2;
  let trucksSinglePrice = 2;

  let discount = 0;

  let totalPrice =
    puzzleCount * puzzleSinglePrice +
    dollsCount * dollsSinglePrice +
    bearsCount * bearSinglePrice +
    trucksCount * trucksSinglePrice +
    minionsCount * minionSinglePrice;

  let toysCount =
    puzzleCount + dollsCount + bearsCount + trucksCount + minionsCount;

  if (toysCount > 50) {
    discount = totalPrice * 0.25;
  }
  let finalPrice = totalPrice - discount;
  let rent = (finalPrice * 10) / 100;
  let profit = finalPrice - rent;
  if (profit > holidayPrice) {
    console.log(`Yes! ${(profit - holidayPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(profit - holidayPrice).toFixed(2)} lv needed.`
    );
  }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
