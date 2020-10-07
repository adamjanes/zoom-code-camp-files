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

const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    const playerMove = event.target.id;
    const computerMove = randomMove();

    // update computer's image to show move
    const computerImage = document.getElementById("computer-image");
    computerImage.src = computerMove.src;
    computerImage.alt = computerMove.alt;
  });
}
