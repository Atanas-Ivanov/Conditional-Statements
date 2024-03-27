function lunchBreak(input) {
  let movie = input[0];
  let movieDuration = Number(input[1]);
  let breakDuration = Number(input[2]);
  let eatTime = (1 / 8) * breakDuration;
  let relaxTime = (1 / 4) * breakDuration;
  let timeLeft = breakDuration - eatTime - relaxTime;
  if (timeLeft >= movieDuration) {
    console.log(
      `You have enough time to watch ${movie} and left with ${Math.ceil(
        timeLeft - movieDuration
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${movie}, you need ${Math.ceil(
        movieDuration - timeLeft
      )} more minutes.`
    );
  }
}
lunchBreak(["Teen Wolf", "48", "60"]);
