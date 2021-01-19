
   let computerScore = 0
   let playerScore = 0
   let computerArr = ["Rock", "Paper", "Scissors"]
   let playerSelection = prompt("Please enter Rock, Paper or Scissors!")
   let computerSelection = computerArr[Math.floor(Math.random() * computerArr.length)]
 alert(computerSelection)
game()
   function playRound (computerSelection, playerSelection) {
       
         if((computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Rock"
          && playerSelection === "Scissors") || (computerSelection === "Scissors" && playerSelection ===
          "Paper")) {
alert("Computer wins the round!");
++computerScore 
          }
          else {
alert("You won the round!");
++playerScore
          }
   }
   console.log(playRound(playerSelection, computerSelection));
   alert(computerScore)
   alert(playerScore)

   function game () { while ((computerScore === 5) || (playerScore === 5)) {
       playRound(playerSelection, computerSelection)
   } 
   }
