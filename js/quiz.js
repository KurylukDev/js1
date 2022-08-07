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

function Question (text, choices, answer, img) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
	this.img = img;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}


function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {

		let imgQ = document.getElementById('imgQuiz');
		imgQ.innerHTML = quiz.getQuestionIndex().img;

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

//Funcion para mostrar los resultados al finalizar la quiz
function showScores() { 
	//Si acertaste 4 o mas te felicita
	if(quiz.score >= 4){
		let element = document.getElementById('quiz');
		element.innerHTML = `
		<h1>Result</h1>
		<img class='imgScore' src='../media/img/quiz/congrats.gif'>
		<h2 id='score'> Your Scores: ${quiz.score}</h2>
		`
	}else{
		// si solo acertaste 3 o menos te invita volver a intentar
		let element = document.getElementById('quiz');
		element.innerHTML = `
		<h1>Result</h1>
		<img class='imgScore' src='../media/img/quiz/fail.gif'>
		<h2 id='score'> Your Scores: ${quiz.score}</h2>
		<button type="button" onclick="location.reload()">Reload</button>
		`
	}
}


const questions = [
	new Question("¿En Que Episodio Murio Obi-Wan Kenobi?", ["Episodio III", "Episodio VI", "Episodio IV", "Episodio V"], "Episodio IV","<img class='imgQuiz' src='../media/img/quiz/obiwanviejo.webp'>"),
	new Question("¿Quien era el maestro del Conde Dooku?", ["Tyranus", "Darth Sidiou", "Yoda", "Qui-Gon Jinn"], "Yoda","<img class='imgQuiz' src='../media/img/quiz/dooku.webp'>"),
	new Question("¿Quien mato a Qui-Gon Jinn?", ["Darth Maul", "Darth Tyranus", "Darth Sidiou", "Darth Vader"], "Darth Maul","<img class='imgQuiz' src='../media/img/quiz/qui-gon.webp'>"),
	new Question("¿Qué le pasó a Anakin Skywalker durante la batalla con el Conde Dooku?", ["Perdió su pierna izquierda", "Perdió su brazo derecho", "Perdió su pierna derecha", "Él perdió"], "Perdió su brazo derecho","<img class='imgQuiz' src='../media/img/quiz/anakin.jpg'>"),
	new Question("¿Cuál es el arma preferida de Chewbacca?", ["Rifle bláster", "Sable de luz", "Club de metal", "Bowcaster"], "Bowcaster","<img class='imgQuiz' src='../media/img/quiz/chewbacca.gif'>"),
	new Question("¿De qué color es la pierna derecha de C-3PO?", ["Negro", "Rojo", "Plata", "Dorado"], "Plata","<img class='imgQuiz' src='../media/img/quiz/c-3po.gif'>"),
	new Question("¿Quién hizo estallar la primera Estrella de la Muerte y con qué arma?", ["Luke Skywalker con su sable de luz", "Princesa Leia con un X-Wing", "Luke Skywalker con un X-Wing", "Princesa Leia con un detonador térmico"], "Luke Skywalker con un X-Wing","<img class='imgQuiz' src='../media/img/quiz/star.webp'>"),
	new Question("¿Cual es el planeta natal de Obi-Wan Kenobi?", ["Stewjon", "Tatooine", "Naboo", "Utapau"], "Stewjon","<img class='imgQuiz' src='../media/img/quiz/planeta.jpg'>"),
];

let quiz = new Quiz (questions);

populate();

