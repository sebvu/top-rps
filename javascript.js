const ROCK_CHOICE = (ENEMY_WIN_CODE = 1);
const PAPER_CHOICE = (PLAYER_WIN_CODE = 2);
const SCISSORS_CHOICE = (TIE_CODE = 3);

main();

function main() {
  let playerScore = 0;
  let enemyScore = 0;
  const POSTFIX_STR = "Select a button!";
  const mainTextDisplay = document.querySelector("h2");
  const playerScoreDisplay = document.getElementById("playerScoreSpan");
  const enemyScoreDisplay = document.getElementById("enemyScoreSpan");
  const choiceCtn = document.querySelector("div");
  const playerChoiceDisplay = document.getElementById("playerChoice");
  const enemyChoiceDisplay = document.getElementById("enemyChoice");

  mainTextDisplay.textContent = `You are the player. ${POSTFIX_STR}`;
  playerScoreDisplay.textContent = playerScore;
  enemyScoreDisplay.textContent = enemyScore;

  choiceCtn.addEventListener("click", (e) => {
    let target = e.target;
    let playerChoice;
    let enemyChoice = Math.floor(Math.random() * (4 - 1) + 1); // selects 1 - 3
    let isClicked = false; // handle button clicks in between the marked children

    switch (
      target.id // retrieve player action
    ) {
      case "rockBtn":
        playerChoice = ROCK_CHOICE;
        isClicked = true;
        break;
      case "paperBtn":
        playerChoice = PAPER_CHOICE;
        isClicked = true;
        break;
      case "scissorsBtn":
        playerChoice = SCISSORS_CHOICE;
        isClicked = true;
        break;
    }

    console.log(playerChoice, target.id);
    if (isClicked) {
      playerChoiceDisplay.textContent = getNameFromChoice(playerChoice);
      enemyChoiceDisplay.textContent = getNameFromChoice(enemyChoice);

      let gameCode = playGame(playerChoice, enemyChoice);

      switch (gameCode) {
        case ENEMY_WIN_CODE:
          mainTextDisplay.textContent = `Enemy wins this round! ${POSTFIX_STR}`;
          enemyScore++;
          break;
        case PLAYER_WIN_CODE:
          mainTextDisplay.textContent = `Player wins this round! ${POSTFIX_STR}`;
          playerScore++;
          break;
        case TIE_CODE:
          mainTextDisplay.textContent = `Both players tied! ${POSTFIX_STR}`;
          break;
      }

      playerScoreDisplay.textContent = playerScore;
      enemyScoreDisplay.textContent = enemyScore;
    }
  });
}

function getNameFromChoice(choice) {
  switch (choice) {
    case ROCK_CHOICE:
      return "Rock";
      break;
    case PAPER_CHOICE:
      return "Paper";
      break;
    case SCISSORS_CHOICE:
      return "Scissor";
      break;
    default:
      return "Not A Valid Choice";
      break;
  }
}

function playGame(pChoice, eChoice) {
  function roundAction(enemyChoice, enemyWinChoice, enemyLoseChoice) {
    if (enemyChoice === enemyWinChoice) {
      return ENEMY_WIN_CODE;
    } else if (enemyChoice === enemyLoseChoice) {
      return PLAYER_WIN_CODE;
    } else {
      return TIE_CODE;
    }
  }

  switch (
    // return the corresponding game code given the world state choices
    pChoice
  ) {
    case ROCK_CHOICE:
      return roundAction(eChoice, SCISSORS_CHOICE, PAPER_CHOICE);
      break;
    case PAPER_CHOICE:
      return roundAction(eChoice, SCISSORS_CHOICE, ROCK_CHOICE);
      break;
    case SCISSORS_CHOICE:
      return roundAction(eChoice, ROCK_CHOICE, PAPER_CHOICE);
      break;
  }
}
