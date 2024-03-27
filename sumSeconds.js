function sumSeconds(input) {
  let timeFirst = Number(input[0]);
  let timeSecond = Number(input[1]);
  let timeThird = Number(input[2]);
  let totalTime = timeFirst + timeSecond + timeThird;
  let minuets = Math.floor(totalTime / 60);
  let sumSeconds = totalTime % 60;
  if (sumSeconds < 10) {
    console.log(`${minuets}:0${sumSeconds}`);
  } else {
    console.log(`${minuets}:${sumSeconds}`);
  }
}
sumSeconds(["22", "7", "34"]);
