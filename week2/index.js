function celsiusToFahrenheit(degreesInCelsius) {
  const degreesInFahrenheit = (degreesInCelsius * 1.8) + 32
  return degreesInFahrenheit
}

// console.log(celsiusToFahrenheit(0)); // 32
// console.log(celsiusToFahrenheit(20)); // 68
// console.log(celsiusToFahrenheit(100)); // 212

function getAgeFromUser() {
  const age = prompt("How old are you at the moment?");
  return age;
}

// const userAge = getAgeFromUser();
// console.log(userAge);

function calculateAgeInYear(year) {
  const userAge = getAgeFromUser();
  const yearsToYear = year - 2020;
  const ageInYear = Number(userAge) + yearsToYear;
  const message = "In " + year + ", you will be " + ageInYear + " years old!";
  alert(message);
}

// calculateAgeInYear(2026);