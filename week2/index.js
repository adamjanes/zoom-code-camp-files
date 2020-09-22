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

function calculateAgeIn2050() {
  const userAge = getAgeFromUser();
  const message = "In 2050, you will be" + userAge + " years old!";
  alert(message);
}

calculateAgeIn2050();