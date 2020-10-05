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

// buildPyramid();

const data = [
  {
    name: "John Smith",
    short_breath: false,
    temperature: 37.2,
    runny_nose: false,
    itchy_eyes: true
  },
  {
    name: "Jane Doe",
    short_breath: true,
    temperature: 38.6,
    runny_nose: false,
    itchy_eyes: false
  },
  {
    name: "Jim Johnson",
    short_breath: false,
    temperature: 36.3,
    runny_nose: true,
    itchy_eyes: false
  },
  {
    name: "Ginny Roberts",
    short_breath: true,
    temperature: 39.2,
    runny_nose: false,
    itchy_eyes: false
  },
  {
    name: "Tina Chapman",
    short_breath: false,
    temperature: 36.4,
    runny_nose: false,
    itchy_eyes: false
  },
  {
    name: "Dan Powers",
    short_breath: true,
    temperature: 38.0,
    runny_nose: false,
    itchy_eyes: true
  },
];

function coronavirusScreening(clients) {
  for (let i = 0; i < clients.length; i++) {
    const client = clients[i];

    if (client.temperature > 38 && client.short_breath) {
      console.log(client.name + " might have coronavirus. We need to cancel their reservation.")
    }
    else if (client.temperature > 38 && !client.short_breath) {
      console.log(client.name + " might have the flu. They need to wear a mask.")
    }
    else if (client.runny_nose && !client.itchy_eyes) {
      console.log(client.name + " might have a cold. They need to wear a mask.")
    }
    else {
      console.log(client.name + " looks healthy.")
    }
  }
}

coronavirusScreening(data); // should make logs