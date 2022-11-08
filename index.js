//FETCH THE ELEMENTS FROM HTML
let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let leader = document.getElementById('leader')

let homeCounter = 0
let guestCounter = 0

//ONCLICK FUNCTIONS FOR HOME SCORE
function homeOne() {
    homeCounter += 1
    homeScore.innerText = homeCounter
    highlight()
}

function homeTwo() {
    homeCounter += 2
    homeScore.innerText = homeCounter
    highlight()
}

function homeThree() {
    homeCounter += 3
    homeScore.innerText = homeCounter
    highlight()
}

//ONCLICK FUNCTIONS FOR GUEST SCORE
function guestOne() {
    guestCounter += 1
    guestScore.innerText = guestCounter
    highlight()
}

function guestTwo() {
    guestCounter += 2
    guestScore.innerText = guestCounter
    highlight()   
}

function guestThree() {
    guestCounter += 3
    guestScore.innerText = guestCounter
    highlight()
}

//CLEAR SCORE BUTTON
function clearScore() {
    homeCounter = 0
    homeScore.innerText = homeCounter
    homeScore.style.backgroundColor = "blue"
    
    guestCounter = 0
    guestScore.innerText = guestCounter
    guestScore.style.backgroundColor = "blue"
    
    leader.innerText = "Who's going to win!!!"
}

//HIGHLIGHT LEADER
function highlight() {
    if (homeCounter > guestCounter) {
        leader.innerText = "Leader is : HOME!"
        homeScore.style.backgroundColor = "red"
        guestScore.style.backgroundColor = "green"
    } else if (guestCounter > homeCounter){
        leader.innerText = "Leader is : GUEST!"
        guestScore.style.backgroundColor = "red"
        homeScore.style.backgroundColor = "green"
    } else {
        leader.innerText = "Its a TIE!"
        homeScore.style.backgroundColor = "blue"
        guestScore.style.backgroundColor = "blue"
    }
}
highlight()