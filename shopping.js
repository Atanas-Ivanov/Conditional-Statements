function shopping(input) {
  let budget = Number(input[0]);
  let videoCardCount = Number(input[1]);
  let processorCount = Number(input[2]);
  let ramMemoryCount = Number(input[3]);
  let videoCardPrice = 250;
  let processorPrice = (videoCardCount * videoCardPrice * 35) / 100;
  let ramMemoryPrice = (videoCardCount * videoCardPrice * 10) / 100;
  let totalPrice =
    processorCount * processorPrice +
    ramMemoryCount * ramMemoryPrice +
    videoCardCount * videoCardPrice;
  if (videoCardCount > processorCount) {
    totalPrice = totalPrice - totalPrice * 0.15;
  }
  if (budget > totalPrice) {
    console.log(`You have ${budget - totalPrice} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${Math.abs(totalPrice - budget).toFixed(
        2
      )} leva more!`
    );
  }
}
shopping(["920.45", "3", "1", "1"]);
