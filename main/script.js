const wins = 0;
const losses = 0;
const ties = 0;
const keepPlaying = true;
// caputure user choice
//user can pick r,p, or s
while (keepPlaying) {
  const userChoice = prompt("what do you choose?r, p or s?").toLowerCase;
  console.log(userChoice);

  // generate computer choice
  //3 possible chioces rock paper and scissors
  const choices = ["r", "p", "s"];
  // should be randomized each time
  const randomChoices = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomChoices];
  console.log(computerChoice);
  alert(`you choose ${userChoice} and i choose ${computerChoice}`);
  // compare choices
  if (userChoice === computerChoice) {
    alert("is a tie!!");
    ties++;
  } else if (userChoice === "s" && computerChoice === "p") {
    alert("its a win!");
    wins++;
  } else if (userChoice === "p" && computerChoice === "r") {
    alert("its a win!");
    wins++;
  } else if (userChoice === "r" && computerChoice === "s") {
    wins++;
  } else {
    console.log("its a loss");
    losses++;
  }
  alert(`wins: ${wins}\n\nlosses: ${losses}\n\nties: ${ties}`);
  keepPlaying = confirm("do you want to play again");
}
// rock beats paper, paper beats rock scissors beats paper.
