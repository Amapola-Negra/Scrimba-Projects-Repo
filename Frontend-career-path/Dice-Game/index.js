// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const info = document.getElementById("info")
const diceInfo1 = document.getElementById("dice-info-1")
const diceInfo2 = document.getElementById("dice-info-2")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const settingsBtn = document.getElementById("settingsBtn")
const playBtn = document.getElementById("playBtn")

const settings = document.getElementById("settings")
const game = document.getElementById("game")
game.style.display = "none"
let diceMode = true
function letsPlay(){// go to game with the choices 
    game.style.display = "block"
    settings.style.display = "none"
    if (document.myPlayers.player[0].checked){
        
        player1Turn = true
        console.log("player 1")
        message.textContent = "Player 1 Turn"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        
    } else {
        player1Turn = false
        console.log("player 2")
        message.textContent = "Player 2 Turn"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
    }
    if(document.myMode.mode[0].checked){
        info.textContent="You're just rolling the dice"
        diceMode = true
    }else{
        info.textContent="Double or nothing"
        diceMode = false
    }
    
}
playBtn.addEventListener("click", function(){
    letsPlay()
})
function showResetButton() {
    rollBtn.style.display = "none"
    
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
     
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        if (diceMode === false){// we are playing double or nothing
            const randomMode = Math.floor(Math.random() * 2) + 1
            if (randomMode === 1){
                player1Score =0;
                info.textContent= "Better luck next time! 😉"
            }else{
                player1Score = player1Score * 2;
                info.textContent= "Congratulations! 😀 🎊"
            }
         }
        player1Dice.classList.remove("dice-info")
     
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        if (diceMode === false){
            const randomMode = Math.floor(Math.random() * 2) + 1
            if (randomMode === 1){
                player2Score =0;
            }else{
                player2Score = player1Score * 2
            }
        }
       
     player2Dice.classList.remove("dice-info")
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        info.textContent = "Player 1 Won 🎉!"
        showResetButton()
    }  else if (player2Score >= 20) {
        info.textContent = "Player 2 Won 🎉!"
        showResetButton()
    }
    player1Turn = !player1Turn
    
    
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    // to start again the game
    player1Score = 0
    player2Score = 0
    player1Turn = true
    diceMode = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.classList.add("dice-info")
     player2Dice.classList.add("dice-info")
    player1Dice.innerHTML = "Player 1"
    player2Dice.innerHTML ="Player 2"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    info.textContent= "You're just rolling the dice"
    
}

settingsBtn.addEventListener("click", function(){ 
    //go to the settings panel
    console.log("Click!!")
    game.style.display = "none"
    settings.style.display = "block"
})
