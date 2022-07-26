const home = document.getElementById("home")
const guest = document.getElementById("guest")
const btnHomeP1 = document.getElementById("btn-home+1")
const btnHomeP2 = document.getElementById("btn-home+2")
const btnHomeP3 = document.getElementById("btn-home+3")
const btnGuestP1 = document.getElementById("btn-guest+1")
const btnGuestP2 = document.getElementById("btn-guest+2")
const btnGuestP3 = document.getElementById("btn-guest+3")

const btnHomeM1 = document.getElementById("btn-home-1")
const btnHomeM2 = document.getElementById("btn-home-2")
const btnHomeM3 = document.getElementById("btn-home-3")
const btnGuestM1 = document.getElementById("btn-guest-1")
const btnGuestM2 = document.getElementById("btn-guest-2")
const btnGuestM3 = document.getElementById("btn-guest-3")
const rules = document.getElementById("rules")
const reset = document.getElementById("reset")
const info = document.getElementById("info")
const start = document.getElementById("start")
const homeTrophy = document.getElementById("home-trophy")
const guestTrophy = document.getElementById("guest-trophy")
let homeScore = 0
let guestScore = 0
let homeTr = 0
let guestTr = 0
/**____________Initial state_______________________ */
start.style.display = "flex"
homeTrophy.textContent = homeTr
guestTrophy.textContent = guestTr
home.textContent = `0${homeScore}`
guest.textContent = `0${guestScore}`
info.textContent ="May the best win!!"
function getHomeTrophys(){
    if (homeScore >= 100){
        homeScore = 0
        homeTr += 1
        homeTrophy.textContent = homeTr
    } 
}
function getGuestTrophys(){
    if (guestScore >= 100){
        guestScore = 0
        guestTr += 1
        guestTrophy.textContent = guestTr
    } 
}
function resetCounter(){
    homeScore = 0
    guestScore = 0
    homeTr = 0
    guestTr = 0
    homeTrophy.textContent = homeTr
    guestTrophy.textContent = guestTr
    home.textContent = `0${homeScore}`
    guest.textContent = `0${guestScore}`
    info.textContent ="May the best win!!"
}

function checkWinner(){
    info.textContent = homeScore > guestScore ? "Home wins!!" : homeScore < guestScore ? "Guest wins!!" : "It's a tie!!"
}

/**____________Start the game________________ */

start.addEventListener("click", ()=> start.style.display = "none")

/**____________Utility buttons_____________________________ */

reset.addEventListener("click", resetCounter)
rules.addEventListener("click", ()=> start.style.display = "flex")
/**____________Home buttons__________________________ */
/**_____________Add___________________ */
btnHomeP1.addEventListener("click", ()=> {
    homeScore += 1
    checkWinner()
    getHomeTrophys()
    home.textContent = homeScore < 10 ? `0${homeScore}` : homeScore
})
btnHomeP2.addEventListener("click", ()=> {
    homeScore += 2
    checkWinner()
    getHomeTrophys()
    home.textContent = homeScore < 10 ? `0${homeScore}` : homeScore
})
btnHomeP3.addEventListener("click", ()=> {
    homeScore += 3
    checkWinner()
    getHomeTrophys()
    home.textContent = homeScore < 10 ? `0${homeScore}` : homeScore
})
/**___________Subtract____________________ */
btnHomeM1.addEventListener("click", ()=> {
    homeScore -= 1
    checkWinner()
    if(homeScore < 0){
        homeScore = 0
    }
    home.textContent = homeScore < 10 ? `0${homeScore}` : homeScore
})
btnHomeM2.addEventListener("click", ()=> {
    homeScore -= 2
    checkWinner()
    if(homeScore < 0){
        homeScore = 0
    }
    home.textContent = homeScore < 10 ? `0${homeScore}` : homeScore
})
btnHomeM3.addEventListener("click", ()=> {
    homeScore -= 3
    checkWinner()
    if(homeScore < 0){
        homeScore = 0
    }
    home.textContent = homeScore < 10 ? `0${homeScore}` : homeScore
})


/**__________Guest buttons______________________________ */
btnGuestP1.addEventListener("click", ()=> {
    guestScore += 1
    checkWinner()
    getGuestTrophys()
    guest.textContent = guestScore < 10 ? `0${guestScore}` : guestScore
})
btnGuestP2.addEventListener("click", ()=> {
    guestScore += 2
    checkWinner()
    getGuestTrophys()
    guest.textContent = guestScore < 10 ? `0${guestScore}` : guestScore
})
btnGuestP3.addEventListener("click", ()=> {
    guestScore += 3
    checkWinner()
    getGuestTrophys()
    guest.textContent = guestScore < 10 ? `0${guestScore}` : guestScore
})

/**___________Subtract____________________ */
btnGuestM1.addEventListener("click", ()=> {
    guestScore -= 1
    checkWinner()
    if(guestScore < 0){
        guestScore = 0
    }
    guest.textContent = guestScore < 10 ? `0${guestScore}` : guestScore
})
btnGuestM2.addEventListener("click", ()=> {
    guestScore -= 2
    checkWinner()
    if(guestScore < 0){
        guestScore = 0
    }
    guest.textContent = guestScore < 10 ? `0${guestScore}` : guestScore
})
btnGuestM3.addEventListener("click", ()=> {
    guestScore -= 3
    checkWinner()
    if(guestScore < 0){
        guestScore = 0
    }
    guest.textContent = guestScore < 10 ? `0${guestScore}` : guestScore
})

