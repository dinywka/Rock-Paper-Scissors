
   let computerScore = 0
   let playerScore = 0
   let computerArr = ["Rock", "Paper", "Scissors"]

   function playRound () {
    let playerSelection = prompt("Please enter Rock, Paper or Scissors!")
    let computerSelection = computerArr[Math.floor(Math.random() * computerArr.length)]
  alert(computerSelection)
         if((computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Rock"
          && playerSelection === "Scissors") || (computerSelection === "Scissors" && playerSelection ===
          "Paper")) {
alert("Computer wins the round!");
computerScore++ 
          }
          else {
alert("You won the round!");
playerScore++
          }
          
   }



playRound()
alert(computerScore)
alert(playerScore)

playRound()
alert(computerScore)
alert(playerScore)

playRound()
alert(computerScore)
alert(playerScore)

playRound()
alert(computerScore)
alert(playerScore)


