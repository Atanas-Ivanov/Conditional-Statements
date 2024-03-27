function bonusScore(input) {
  let startingScore = Number(input[0]);
  let bonus = 0;
  if (startingScore <= 100) {
    bonus = 5;
  } else if (startingScore > 100 && startingScore < 1000) {
    bonus = startingScore * 0.2;
  } else if (startingScore >= 1000) {
    bonus = startingScore * 0.1;
  }
  if (startingScore % 2 == 0) {
    bonus += 1;
  } else if (startingScore % 10 == 5) {
    bonus += 2;
  }
  console.log(bonus);
  console.log(startingScore + bonus);
}
bonusScore(["20"]);
