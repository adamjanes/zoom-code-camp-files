function frenchCalculator() {
  const userAge = Number(prompt("How old are you?"));
  const crushAge = Number(prompt("How old is your crush?"));

  const lowerLimit = (userAge / 2) + 7;
  const upperLimit = (userAge * 2) - 7;

  if (crushAge < lowerLimit) {
    console.log("This one seems a bit young for you!");
  }
  else if (crushAge > upperLimit) {
    console.log("This one seems a bit old for you!");
  }
  else {
    console.log("Society says your relationship would be okay. Ask them on a date!");
  }
}

frenchCalculator();