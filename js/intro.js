const entryName = document.getElementById("name");
const totalQ = document.querySelectorAll(".qLength");
const entryNum = document.getElementById("userNum");
const startBtn = document.getElementById("startBtn");
const form = document.getElementById("qForm");

let yourName = localStorage.getItem("Username");
entryName.textContent = yourName;

totalQ.forEach(length => length.textContent = localQuestions.length)


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(entryNum.value == "" || entryNum.value < 10 || entryNum.value > localQuestions.length) {
        alert(`Please Enter a number between 10 and ${localQuestions.length}`);
        entryNum.value = ""
        return;
    }

    localStorage.setItem("UserQuestion", entryNum.value);
    location.replace("questions.html")

})