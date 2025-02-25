const userName = document.getElementById('userNameResult');
const userScore = document.getElementById('userScoreResult');
const correctAnswersList = document.getElementById('correctAnswersList');
const incorrectAnswersList = document.getElementById('incorrectAnswersList');
// Localstorage data
const QuizResults = JSON.parse(localStorage.getItem('QuizResults'));

// Set the user Details
function setProfile() {
	userName.textContent = QuizResults.currentUsername;
	userScore.textContent = QuizResults.currentUserScore;

	correctAnswers = QuizResults.correctAnswers;
	incorrectAnswers = QuizResults.incorrectAnswers;

	correctAnswers.forEach((item) => {
		const li = document.createElement('li');
		li.innerHTML = `
        <strong>Question:</strong> ${item.ques}<br>
        <strong>Your Answer:</strong> ${item.userAns}<br>
        <strong>Correct Answer:</strong> ${item.ans}
    `;
		correctAnswersList.appendChild(li);
	});

	incorrectAnswers.forEach((item) => {
		const li = document.createElement('li');
		li.innerHTML = `
        <strong>Question:</strong> ${item.ques}<br>
        <strong>Your Answer:</strong> ${item.userAns}<br>
        <strong>Correct Answer:</strong> ${item.ans}
    `;
		incorrectAnswersList.appendChild(li);
	});
}
setProfile();

document.getElementById('playAgainBtn').addEventListener('click', () => {
	window.location.href = 'intro.html';
});
