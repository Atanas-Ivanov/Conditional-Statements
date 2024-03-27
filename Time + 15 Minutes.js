function timePlus15Minutes(input) {
  let inputHours = Number(input[0]);
  let inputMinutes = Number(input[1]);
  let hoursIntoMinutes = inputHours * 60;
  let plus15Minutes = hoursIntoMinutes + inputMinutes + 15;
  let hours = Math.floor(plus15Minutes / 60);
  let minutes = plus15Minutes % 60;

  if (hours > 23) {
    hours = 0;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  console.log(`${hours}:${minutes}`);
}
timePlus15Minutes(["1", "46"]);
