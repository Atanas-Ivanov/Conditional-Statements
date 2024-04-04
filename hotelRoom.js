function hotelRoom(input) {
  let month = input[0];
  let daysSpent = Number(input[1]);
  let studioPrice = 0;
  let apartmentPrice = 0;
  let totalPriceStudio = 0;
  let totalPriceApartment = 0;
  if (month === "May" || month === "October") {
    studioPrice = 50;
    apartmentPrice = 65;
    totalPriceStudio = studioPrice * daysSpent;
    totalPriceApartment = apartmentPrice * daysSpent;
    if (daysSpent > 7 && daysSpent < 14) {
      totalPriceStudio *= 0.95;
    } else if (daysSpent >= 14) {
      totalPriceStudio *= 0.7;
    }
  } else if (month === "June" || month === "September") {
    studioPrice = 75.2;
    apartmentPrice = 68.7;
    totalPriceStudio = studioPrice * daysSpent;
    totalPriceApartment = apartmentPrice * daysSpent;
    if (daysSpent > 14) {
      totalPriceStudio *= 0.8;
    }
  } else if (month === "July" || month === "August") {
    studioPrice = 76;
    apartmentPrice = 77;
    totalPriceStudio = studioPrice * daysSpent;
    totalPriceApartment = apartmentPrice * daysSpent;
  }
  if (daysSpent > 14) {
    totalPriceApartment *= 0.9;
  }
  console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"]);
