const board = document.getElementById("leaderBoard")

let rawData = localStorage.getItem("user");
let newData = JSON.parse(rawData)
console.log(newData)
let newName = newData.userName
let newScore = newData.totalScore
let userResult = {name: newName, score: newScore}
//console.log(userResult)
leaderBoardData.push(userResult)
//console.log(leaderBoardData.length)


leaderBoardData.sort((a, b) => b.score - a.score);

const leaderBoardHtml = leaderBoardData.map((entry, index) => {
    const position = getPosition(index + 1);
    return `
        <div class = "box">
            <p>${position}</p>
            <p>${entry.name}</p>
            <p>${entry.score}/10</p>
        </div>
    `
}).join(" ")

board.innerHTML = leaderBoardHtml;


function getPosition(number){
    if(number === 1) return "1";
    if(number === 2) return "2";
    if(number === 3) return "3";
    return `${number}`
}