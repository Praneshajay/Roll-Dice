let player1score = 0
let player2score = 0

let player1Turn = true
const diceEl = document.querySelector(".dice")

const player1scoreBox = document.getElementById("player-1-score")
const player1scoreUpdate = document.getElementById("player-1-score-updated")
const player2scoreUpdate = document.getElementById("player-2-score-updated")
const scoreBox1 = document.getElementById("score-box1")
const scoreBox2 = document.getElementById("score-box2")
const messageText = document.getElementById("message")

//  Game Buttons

const rollBtn1 = document.getElementById("roll-btn1")
const rollBtn2 = document.getElementById("roll-btn2")
const restartBtn = document.getElementById("restart-btn")


rollBtn1.addEventListener("click", startGame)
rollBtn2.addEventListener("click", startGame)
restartBtn.addEventListener("click", startAgain)
rollBtn1.disabled = true;
rollBtn2.disabled = true;


// Restart btn Function

function restart() {
   rollBtn1.disabled = true;
   rollBtn2.disabled = true;

   restartBtn.style.display = "block"

}


//  function for Start the Game

function startGame() {
   let randomNumber = Math.floor(Math.random() * 6) + 1
   diceEl.src =`/images/dice-${randomNumber}.jpg`;
   if (player1Turn) {
      player1score += randomNumber
      player1scoreUpdate.textContent = player1score
      // player1scoreBox.textContent = randomNumber

      messageText.textContent = "Player-2 To Play"
      scoreBox1.classList.remove('active')
      
      scoreBox2.classList.add("active")
      rollBtn1.classList.add('btnactive')
      rollBtn2.classList.remove('btnactive')
      

   }
   else {
      player2score += randomNumber
      player2scoreUpdate.textContent = player2score
      // player1scoreBox.textContent = randomNumber
      scoreBox2.classList.remove("active")
      rollBtn1.classList.remove('btnactive')

      scoreBox1.classList.add("active")
      rollBtn2.classList.add('btnactive')


      messageText.textContent = "Player-1 To Play"


   }
  
    rollBtn1.disabled = !rollBtn1.disabled
 rollBtn2.disabled = !rollBtn2.disabled

   // Game Winning Condition

   if (player1score >= 30) {
      messageText.textContent = "🎈🎈CONGRATULATION Player 1 Won The Game🎈🎈"
      rollBtn1.classList.add('btnactive')
      rollBtn2.classList.add('btnactive')


      restart()
   }
   else if (player2score >= 30) {
      messageText.textContent = "🎈🎈CONGRATULATION Player 2 Won The Game🎈🎈"
      rollBtn1.classList.add('btnactive')
      rollBtn2.classList.add('btnactive')
      
      restart()

   }
   player1Turn = !player1Turn
 

}



// After click  The Restart Btn 

// Start Again Process


function startAgain() {

   player1score = 0
   player2score = 0
   player1Turn = true
   rollBtn1.disabled = false;
   messageText.textContent = " Player-1 To Play"
   scoreBox2.classList.remove("active")
   scoreBox1.classList.add("active")
   // player1scoreBox.textContent = "-"
   player1scoreUpdate.textContent = "0"
   player2scoreUpdate.textContent = "0"
   rollBtn1.classList.remove('btnactive')
  
   restartBtn.style.display = "none"




}
startAgain()