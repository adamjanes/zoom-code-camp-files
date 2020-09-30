function frenchCalculator() {
  const userAge = Number(prompt("How old are you?"));
  const crushAge = Number(prompt("How old is your crush?"));

  if (userAge > crushAge && (crushAge < (userAge / 2) + 7)) {
    console.log("This one seems a bit young for you!");
  }
  else if (userAge < crushAge && (crushAge > (userAge * 2) - 7)) {
    console.log("This one seems a bit old for you!");
  }
  else {
    console.log("Society says your relationship would be okay. Ask them on a date!");
  }
}

// frenchCalculator();

for (let i = 0; i < 8; i++) {
  let lineOutput = '';

  // j here == "character position in line"
  for (let j = 1; j <= 8; j++) {
    // if we're not at the (8 - i)th position => space
    if (j < 8 - i) {
      lineOutput = lineOutput + " ";
    }
    // otherwise, it's a hash
    else {
      lineOutput = lineOutput + "#";
    }
  }

  console.log(lineOutput);
}