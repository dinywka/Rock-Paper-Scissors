
   let computerScore = 0
   let playerScore = 0
   let computerArr = ["Rock", "Paper", "Scissors"]
   let imgArr = ['/Users/dina/Desktop/IT/Rock-Paper-Scissors/imgs/Rock.png', '/Users/dina/Desktop/IT/Rock-Paper-Scissors/imgs/Scissors.png', '/Users/dina/Desktop/IT/Rock-Paper-Scissors/imgs/Paper.png']
   let choises = document.querySelectorAll("img")
    let p = document.querySelector('#result')
    let score = document.querySelector('#score')
   function playRound (playerSelection) {
    let computerSelection = computerArr[Math.floor(Math.random() * computerArr.length)]
showPCImg (playerSelection)
showCCImg (computerSelection)

         if((computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Rock"
          && playerSelection === "Scissors") || (computerSelection === "Scissors" && playerSelection ===
          "Paper")) {
p.textContent = "Computer wins the round!"
computerScore++ 
          } else if (computerSelection === playerSelection) {
            p.textContent ="It is a tie!"
          }
          else {
            p.textContent = "You won the round!";
playerScore++
          }
score.textContent = "Total score is " + playerScore + " : " + computerScore
    }  


    choises.forEach(image =>{
      image.addEventListener('click', function(){
        playRound(image.className)
      })
    })
  
function showPCImg (playerSelection) {
    if (playerSelection === "Paper") {
        document.getElementById("playerChoice").src = '/Users/dina/Desktop/IT/Rock-Paper-Scissors/imgs/Paper.png'
    } else if (playerSelection === "Rock") {
        document.getElementById("playerChoice").src = '/Users/dina/Desktop/IT/Rock-Paper-Scissors/imgs/Rock.png'
    } else {
        document.getElementById("playerChoice").src = '/Users/dina/Desktop/IT/Rock-Paper-Scissors/imgs/Scissors.png'
    }
}

function showCCImg (computerSelection) {
    if (computerSelection === "Paper") {
        document.getElementById("computerChoice").src = '/Users/dina/Desktop/IT/Rock-Paper-Scissors/imgs/Paper.png'
    } else if (computerSelection === "Rock") {
        document.getElementById("computerChoice").src = '/Users/dina/Desktop/IT/Rock-Paper-Scissors/imgs/Rock.png'
    } else {
        document.getElementById("computerChoice").src = '/Users/dina/Desktop/IT/Rock-Paper-Scissors/imgs/Scissors.png'
    }
}