function newHouse(input) {
  let flowerType = input[0];
  let flowerCount = Number(input[1]);
  let budget = Number(input[2]);
  let discount = 0;
  let rosesPrice = 5;
  let dahliasPrice = 3.8;
  let tulipsPrice = 2.8;
  let narcissusPrice = 3;
  let gladiolusPrice = 2.5;
  let totalPrice = 0;

  if (flowerType == "Roses") {
    totalPrice = flowerCount * rosesPrice;
    if (flowerCount > 80) {
      discount = (totalPrice * 10) / 100;
      totalPrice = totalPrice - discount;
    }
  } else if (flowerType == "Tulips") {
    totalPrice = tulipsPrice * flowerCount;
    if (flowerCount > 80) {
      discount = (totalPrice * 15) / 100;
      totalPrice = totalPrice - discount;
    }
  } else if (flowerType == "Dahlias") {
    totalPrice = dahliasPrice * flowerCount;
    if (flowerCount > 90) {
      discount = (totalPrice * 15) / 100;
      totalPrice = totalPrice - discount;
    }
  } else if (flowerType == "Narcissus") {
    totalPrice = narcissusPrice * flowerCount;
    if (flowerCount < 120) {
      discount = (totalPrice * 15) / 100;
      totalPrice = totalPrice + discount;
    }
  } else if (flowerType == "Gladiolus") {
    totalPrice = gladiolusPrice * flowerCount;
    if (flowerCount < 80) {
      discount = (totalPrice * 20) / 100;
      totalPrice = totalPrice + discount;
    }
  }

  if (totalPrice > budget) {
    let sumNeeded = totalPrice - budget;
    console.log(
      `Not enough money, you need ${sumNeeded.toFixed(2)} leva more.`
    );
  } else {
    let sumLeft = budget - totalPrice;
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flowerType} and ${sumLeft.toFixed(
        2
      )} leva left.`
    );
  }
}
newHouse(["Tulips", "88", "260"]);
