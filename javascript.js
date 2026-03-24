const ROCK_NUMBER = (COMPUTER_WIN_NUMBER = 1);
const PAPER_NUMBER = (PLAYER_WIN_NUMBER = 2);
const SCISSORS_NUMBER = (TIE_NUMBER = 3);
const EXIT_NUMBER = (ERROR_NUMBER = 0);

main();

function main() {
  let playerScore = 0;
  let computerScore = 0;
  let playerChoice;
  let playCode;

  while (playerChoice != 0 || playCode != 0) {
    let scoreContainer = [playerScore, computerScore];
    playerChoice = getPlayerChoice(scoreContainer);
    let computerChoice = getComputerChoice();
    playCode = playRound(playerChoice, computerChoice);

    let postfixStr = `\nPlayer Choice: ${getNamedAction(playerChoice)}\nComputer Choice: ${getNamedAction(computerChoice)}`;

    switch (playCode) {
      case COMPUTER_WIN_NUMBER:
        alert(`Computer wins!${postfixStr}`);
        computerScore++;
        break;
      case PLAYER_WIN_NUMBER:
        alert(`Player wins!${postfixStr}`);
        playerScore++;
        break;
      case TIE_NUMBER:
        alert(`Both players tied!${postfixStr}`);
        break;
      case EXIT_NUMBER:
        break;
      default:
        console.error("playCode is invalid in switch");
        break;
    }
  }
  alert("Thanks for playing! :)");
}

function getNamedAction(ACTION_NUMBER) {
  switch (ACTION_NUMBER) {
    case ROCK_NUMBER:
      return "Rock";
    case PAPER_NUMBER:
      return "Paper";
    case SCISSORS_NUMBER:
      return "Scissors";
    default:
      return "N/A";
  }
}

function getComputerChoice() {
  return Math.floor(Math.random() * (4 - 1) + 1); // 1 - 3
}

// Get player choice as a number
function getPlayerChoice(scoreContainer) {
  let prefixTextPrompt = "Make your option!";

  while (true) {
    let c = parseInt(
      prompt(
        `${prefixTextPrompt}\nSCORE: Player: ${scoreContainer[0]}, Computer: ${scoreContainer[1]}\nType in a number.\n${ROCK_NUMBER}) Rock\n${PAPER_NUMBER}) Paper\n${SCISSORS_NUMBER}) Scissors\n${EXIT_NUMBER}) Quit`,
      ),
    );

    switch (c) {
      case ROCK_NUMBER:
      case PAPER_NUMBER:
      case SCISSORS_NUMBER:
      case EXIT_NUMBER:
        return c;
      default:
        prefixTextPrompt = "Not a correct choice.";
        break;
    }
    continue;
  }
}

function roundAction(computerChoice, computerWinChoice, computerLoseChoice) {
  if (computerChoice === computerWinChoice) {
    return COMPUTER_WIN_NUMBER; // computer win
  } else if (computerChoice === computerLoseChoice) {
    return PLAYER_WIN_NUMBER; // player win
  } else {
    return TIE_NUMBER; // no one wins
  }
}

function playRound(playerChoice, computerChoice) {
  // based off of playerScore, extrapolate results from computerscore

  switch (playerChoice) {
    case ROCK_NUMBER: // rock
      return roundAction(computerChoice, PAPER_NUMBER, SCISSORS_NUMBER);
    case PAPER_NUMBER: // paper
      return roundAction(computerChoice, SCISSORS_NUMBER, ROCK_NUMBER);
    case SCISSORS_NUMBER: // scissors
      return roundAction(computerChoice, ROCK_NUMBER, PAPER_NUMBER);
    case EXIT_NUMBER:
      return EXIT_NUMBER;
    default:
      console.error("Player choice is cooked");
      return ERROR_NUMBER;
  }
}
