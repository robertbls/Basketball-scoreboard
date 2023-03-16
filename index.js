
let scoreHome = document.getElementById("score_home")
let scoreGuest = document.getElementById("score_guest")
let btn_reset = document.getElementById("btn_reset")

let score_home = 0;
let score_guest = 0;
scoreHome.textContent = score_home;
scoreGuest.textContent = score_guest;

function addPoint1_home () {
    score_home += 1
    scoreHome.textContent = score_home;
}

function addPoint2_home () {
    score_home += 2
    scoreHome.textContent = score_home;
}

function addPoint3_home () {
    score_home += 3
    scoreHome.textContent = score_home;
}


function addPoint1_guest () {
    score_guest += 1
    scoreGuest.textContent = score_guest;
}

function addPoint2_guest () {
    score_guest += 2
    scoreGuest.textContent = score_guest;
}

function addPoint3_guest() {
    score_guest += 3
    scoreGuest.textContent = score_guest;
}

function reset() {
    score_home = 0;
    score_guest = 0;
    scoreHome.textContent = score_home;
    scoreGuest.textContent = score_guest;
}

