const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    const playerMove = event.target.id;
    console.log(playerMove) // "rock" or "paper" or "scissors"
  });
}
