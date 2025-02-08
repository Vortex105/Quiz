const entryName = document.getElementById('name');
const totalQ = document.querySelectorAll('.qLength');
const entryNum = document.getElementById('userNum');
const startBtn = document.getElementById('startBtn');
const form = document.getElementById('qForm');
const diff = document.getElementById('difficulty');
const category = document.getElementById('category');

let yourName = localStorage.getItem('Username');
entryName.textContent = yourName;

totalQ.forEach((length) => (length.textContent = localQuestions.length));

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let userDifficulty = diff.value;
	let currrentOption = category.options[category.selectedIndex];
	let optNum = currrentOption.dataset.number;

	if (
		entryNum.value == '' ||
		entryNum.value < 10 ||
		entryNum.value > localQuestions.length
	) {
		alert(`Please Enter a number between 10 and ${localQuestions.length}`);
		entryNum.value = '';
		return;
	}

	localStorage.setItem('UserQuestion', entryNum.value);
	localStorage.setItem('UserDifficulty', userDifficulty);
	localStorage.setItem('UserCategory', optNum);
	location.replace('questions.html');
});
