function examSchedule(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMinute = Number(input[3]);

  let examTime = examHour * 60 + examMinute;
  let arrivalTime = arrivalHour * 60 + arrivalMinute;
  let difference = arrivalTime - examTime;

  if (difference < -30) {
    let hours = Math.floor(Math.abs(difference) / 60);
    let minutes = Math.abs(difference) % 60;
    console.log("Early");
    if (hours > 0) {
      console.log(
        `${hours}:${minutes < 10 ? "0" : ""}${minutes} hours before the start`
      );
    } else {
      console.log(`${minutes} minutes before the start`);
    }
  } else if (difference <= 0) {
    if (difference >= -30) {
      console.log("On time");
    } else {
      console.log("Late");
    }
    if (difference !== 0) {
      let minutes = Math.abs(difference) % 60;
      console.log(
        `${minutes} minutes ${difference < 0 ? "before" : "after"} the start`
      );
    }
  } else {
    let hours = Math.floor(difference / 60);
    let minutes = difference % 60;
    console.log("Late");
    if (hours > 0) {
      console.log(
        `${hours}:${minutes < 10 ? "0" : ""}${minutes} hours after the start`
      );
    } else {
      console.log(`${minutes} minutes after the start`);
    }
  }
}

// Test cases
examSchedule(["9", "30", "9", "35"]);
examSchedule(["9", "00", "10", "05"]);
