function celsiusToFahrenheit(degreesInCelsius) {
  const degreesInFahrenheit = (degreesInCelsius * 1.8) + 32
  return degreesInFahrenheit
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(20)); // 68
console.log(celsiusToFahrenheit(100)); // 212