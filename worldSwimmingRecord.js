function worldSwimmingRecord(input) {
  let worldRecord = Number(input[0]);
  let distance = Number(input[1]);
  let timePerMeter = Number(input[2]);
  let slowingTimes = Math.floor(distance / 15);
  let ivanTime = distance * timePerMeter + slowingTimes * 12.5;

  if (ivanTime < worldRecord) {
    console.log(
      `Yes, he succeeded! The new world record is ${ivanTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    console.log(
      `No, he failed! He was ${(ivanTime - worldRecord).toFixed(
        2
      )} seconds slower.`
    );
  }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
