/*guardar_localstorage()

function guardar_localstorage(){
	let persona ={
		nombre : "simon",
		edad : 21,
		usuario : "admin",
		contraseña : "admin"
	}


let nombre = "pedro"

localStorage.setItem("usuario", JSON.stringify(persona))




}
obtener_localstorage()

function obtener_localstorage(){

	if(JSON.parse( localStorage.getItem("usuario"))){

		let usuario = JSON.parse( localStorage.getItem("usuario"))

		console.log( usuario )

	}else{

		console.log("No se encontro nada")
	}
}*/

function Quiz (questions) {
	this.score = 0; 
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

	if (this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}


function Question (text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}


function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {
		let element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		let choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			let element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}


function guess(id, guess) {
	let button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}


function showProgress() {
	let currentQuestionNumber = quiz.questionIndex + 1;
	let element = document.getElementById('progress');
	element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
	let gameOverHTML = "<h1>Result</h1>"; 
	gameOverHTML += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
	let element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
}


const questions = [
	new Question("¿En Que Episodio Murio Obi-Wan Kenobi?", ["Episodio III", "Episodio VI", "Episodio IV", "Episodio V"], "Episodio IV"),
	new Question("¿Quien era el maestro del Conde Dooku", ["Tyranus", "Darth Sidiou", "Yoda", "Qui-Gon Jinn"], "Yoda"),
	new Question("¿Quien mato a Qui-Gon Jinn?", ["Darth Maul", "Darth Tyranus", "Darth Sidiou", "Darth Vader"], "Darth Maul"),
	new Question("Name of the prime Intelligence org during Soviet era?", ["FSB", "CIA", "Gestapo", "KGB"], "KGB"),
	new Question("Name of the prime Intelligence org during Soviet era?", ["FSB", "CIA", "Gestapo", "KGB"], "KGB"),
	new Question("Name of the prime Intelligence org during Soviet era?", ["FSB", "CIA", "Gestapo", "KGB"], "KGB"),
	new Question("Name of the prime Intelligence org during Soviet era?", ["FSB", "CIA", "Gestapo", "KGB"], "KGB"),
	new Question("Name of the prime Intelligence org during Soviet era?", ["FSB", "CIA", "Gestapo", "KGB"], "KGB"),
	new Question("Name of the prime Intelligence org during Soviet era?", ["FSB", "CIA", "Gestapo", "KGB"], "KGB"),
	new Question("¿Cual es el planeta natal de Obi-Wan Kenobi?", ["Stewjon", "Tatooine", "Naboo", "Utapau"], "Stewjon"),
];

let quiz = new Quiz (questions);

populate(); 
