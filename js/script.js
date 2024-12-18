const totalAns = document.getElementById("answered");
const total = document.getElementById("total");
const timer = document.getElementById("timer");
const circleTime = document.querySelector(".timer")
const ask = document.getElementById("questionBox");
const options = document.querySelectorAll(".option");
const pick = document.querySelectorAll(".select");
const ansBox = document.querySelectorAll(".option-box");
const nextBtn = document.getElementById("nextBtn");


let questionLimit = JSON.parse(localStorage.getItem("UserQuestion"));
let masterNum = 0;
let scoreCount = 0;
let count = questionLimit * 5;
const progFig = questionLimit * 5;
let progDeg = (360 / progFig);
timer.textContent = count;
let randFig = progDeg;


function countTime() {
    let timeInterval = setInterval(() => {
        
    if(count === 0){
        clearInterval(timeInterval);
        alert("Time up")
        if(alert){
            location.reload()
        }
    }
        timer.textContent = count;
        count --
        let timerColor = timer.dataset.color;
        
        randFig += progDeg;
        circleTime.style.background = `conic-gradient(${timerColor} ${randFig}deg, #ABD1C6 ${randFig}deg)`;
        }, 1000)
}

function disableOtherAns() {
    pick.forEach((radio) => {
        radio.addEventListener("change", (e) => {
            if(e.target.checked) {
                pick.forEach(r => {
                    if(r != e.target) {
                        r.disabled = true;
                    }
                })
            }
            nextBtn.disabled = false;
        })
    })
}

function changeQuestion(){

    if(masterNum > questionLimit - 1) {
        masterNum = 0
    }
    ask.textContent = questions[masterNum].question;
}
function changeOption() {
    options.forEach((option, index) => {
        option.textContent = questions[masterNum].answers[index].text
    })
}
function resetRadiobtns(){
    pick.forEach(radio => {
        radio.checked = false;
        radio.disabled = false;
    })
}
function updateTotalAns() {
    let totalAnswered = masterNum + 1;
    totalAns.textContent = totalAnswered;

    if(totalAnswered === questionLimit){
        nextBtn.textContent = "Submit"
        nextBtn.addEventListener("click", () => {
            totalAnswered = 1
            totalAns.textContent = totalAnswered;
        })
    }
}
function showresults(){
    
    if(nextBtn.textContent == "Submit") {
       nextBtn.addEventListener("click", () => {


        let preScore = (scoreCount / questionLimit) * 10
        let newScore = `${preScore}` 
        let scoreArray = newScore.split()
        if(scoreArray[3] >= 5) {
            scoreCount = Math.ceil(preScore);
        } else{
            scoreCount = Math.floor(preScore);
        }
        let userName = localStorage.getItem('Username')
        let totalScore = scoreCount
        let userScores = {userName, totalScore}
        localStorage.setItem("user", JSON.stringify(userScores))

        location.replace("results.html")
       })
    }
}


changeQuestion()
changeOption()

total.textContent = questionLimit;

countTime()
disableOtherAns()
nextBtn.disabled = true;

let totalAnswered = masterNum + 1;
totalAns.textContent = totalAnswered;

nextBtn.addEventListener("click", () => {

    let pAns = questions[masterNum].answers
    const trueAns = pAns.findIndex((obj) => obj.correct === true)
    

    pick.forEach((option, index) => {
        if(option.checked) {
            let userPick = index;
            if(userPick == trueAns) {
                scoreCount++
                //alert(scoreCount)
            }
        }
        
    })
    resetRadiobtns()
    nextBtn.disabled = true;

    
    masterNum++
    updateTotalAns()
    console.log(scoreCount)
    changeQuestion()
    changeOption()
    showresults()

})

