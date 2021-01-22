
   let computerScore = 0
   let playerScore = 0
   let computerArr = ["Rock", "Paper", "Scissors"]
   let choises = document.querySelectorAll("img")

   function playRound (playerSelection) {
    alert(playerSelection)
    let computerSelection = computerArr[Math.floor(Math.random() * computerArr.length)]
  
  alert(computerSelection)
         if((computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Rock"
          && playerSelection === "Scissors") || (computerSelection === "Scissors" && playerSelection ===
          "Paper")) {
alert("Computer wins the round!");
computerScore++ 
          } else if (computerSelection === playerSelection) {
            alert("It is a tie!")
          }
          else {
alert("You won the round!");
playerScore++
          }
    }  

    choises.forEach(image =>{
      image.addEventListener('click', function(){
        playRound(image.className)
      })
    })
  
