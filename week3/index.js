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

// frenchCalculator();

function buildPyramid() {
  let height;

  while (!height) {
    const input = Number(prompt("How high do you want the pyramid?"));
    if (input > 0 && input <= 20) {
      height = input;
    }
  }

  for (let i = 0; i < height; i++) {
    let lineOutput = '';
  
    for (let j = 1; j <= height; j++) {
      if (j < height - i) {
        lineOutput = lineOutput + " ";
      }
      else {
        lineOutput = lineOutput + "#";
      }
    }
  
    console.log(lineOutput);
  }
}

buildPyramid();