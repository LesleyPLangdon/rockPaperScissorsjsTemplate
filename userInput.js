
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors" || userInput == "ocvts") {
      return userInput;
    } else {
      console.log("user input error");
    }
  }
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break
      }
  }
  const determineWinner = (userChoice, computerChoice) => {
    result = "";
    if (userChoice == computerChoice) {
      result = "It's a tie!";
    } else if ((userChoice == "rock" && computerChoice == "paper") || (userChoice == "paper" && computerChoice == "scissors") || (userChoice == "scissor" && computerChoice == "rock")) {
      result = "Computer Wins!!";
    } else if (userChoice == 'ocvts' || (computerChoice == "rock" && userChoice == "paper") || (computerChoice == "paper" && userChoice == "scissors") || (computerChoice == "scissors" && userChoice == "rock")) {
      result = "Player Wins!!";
    } else {
      result = "Error determining winner";
    }
    
    return result;
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('ocvts');
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
  