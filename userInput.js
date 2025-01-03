let userChoice = "";
let computerChoice = "";

const getUserChoice = () => {
    // alert("getUserChoice ran");
    let userInput = document.getElementById('userInput').value.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors" || userInput == "ocvts") {
      userChoice = userInput;
      document.getElementById("userChoice").innerHTML = ("Player Selected: " + userChoice);
      computerChoice = getComputerChoice();
      document.getElementById("computerChoice").innerHTML = ("Computer Selected: " + computerChoice);
      document.getElementById("winner").innerHTML = determineWinner();
    } else {
      alert("user input error, please try again");
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
  const determineWinner = () => {
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
  
  document.getElementById('submit').addEventListener("click", getUserChoice);
  