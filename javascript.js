// get human choice
// generate computer choice
// playround, using switch

main();

function main() {
  let humanScore = getHumanChoice();
  let computerScore = () => Math.floor(Math.random() * (4 - 1) + 1); // 1 - 3

  playRound(humanScore, computerScore());
}

// Get human choice as a number
function getHumanChoice() {
  let prefixTextPrompt = "Make your option!";

  while (true) {
    let c = parseInt(
      prompt(
        `${prefixTextPrompt} Type in a number.\n1) Rock\n2) Paper\n3) Scissors`,
      ),
    );

    switch (c) {
      case 1:
      case 2:
      case 3:
        return c;
      default:
        prefixTextPrompt = "Not a correct choice.";
        break;
    }
    continue;
  }
}

function playRound(humanScore, computerScore) {}
