function randomMove() {
  // number between 1 and 3
  const num = Math.floor(Math.random() * 3);

  if (num === 1) {
    return {
      name: "rock",
      src: "images/hand-rock.svg",
      alt: "Rock",
    };
  } else if (num === 2) {
    return {
      name: "paper",
      src: "images/hand-paper.svg",
      alt: "Paper",
    };
  } else {
    return {
      name: "scissors",
      src: "images/hand-scissors.svg",
      alt: "Scissors",
    };
  }
}

function playGame(playerMove, computerMove) {
  if (playerMove === computerMove) {
    // same move => draw
    return {
      winner: null,
      text: "Draw! Let's try that again.",
    };
  } else if (playerMove === "rock") {
    if (computerMove === "paper") {
      // computer wins
      return {
        winner: "computer",
        text: "You fool! Paper beats rock! Let's try that again.",
      };
    } else {
      // player wins
      return {
        winner: "player",
        text: "Argh! Of course - rock beats scissors! Let's try that again.",
      };
    }
  } else if (playerMove === "paper") {
    if (computerMove === "scissors") {
      // computer wins
      return {
        winner: "computer",
        text: "You fool! Scissors beats paper! Let's try that again.",
      };
    } else {
      // player wins
      return {
        winner: "player",
        text: "Argh! Of course - paper beats rock! Let's try that again.",
      };
    }
  } else {
    if (computerMove === "rock") {
      // computer wins
      return {
        winner: "computer",
        text: "You fool! Rock beats scissors! Let's try that again.",
      };
    } else {
      // player wins
      return {
        winner: "player",
        text: "Argh! Of course - scissors beats paper! Let's try that again.",
      };
    }
  }
}

const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    const playerMove = event.target.id;
    const computerMove = randomMove();

    // update computer's image to show move
    const computerImage = document.getElementById("computer-image");
    computerImage.src = computerMove.src;
    computerImage.alt = computerMove.alt;

    const results = playGame(playerMove, computerMove.name);
  });
}
