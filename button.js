let userChoice = "";
let computerChoice = "";
const getUserChoice = (userInput) => {
   userChoice = userInput;
  //  console.log(userChoice);
  document.getElementById("userChoice").innerHTML = ("Player Selected: " + userChoice)
   getComputerChoice();
  }
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    case 2:
      computerChoice = 'scissors';
      break
      }
      // console.log(computerChoice);
      document.getElementById("computerChoice").innerHTML = ("Computer Selected: " + computerChoice)
      determineWinner();
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
    
    // console.log(result);
    document.getElementById("winner").innerHTML = result
   
  }
  
  // const playGame = () => {
    
  //   console.log(userChoice);
    
  //   console.log(computerChoice);
  //   console.log(result);
  // }
  
  // playGame();
  
  
