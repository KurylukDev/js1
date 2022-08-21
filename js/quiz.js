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
	element.innerHTML = "questions " + currentQuestionNumber + " of " + quiz.questions.length;
}

//Funcion para mostrar los resultados al finalizar la quiz
function showScores() { 
	//Si acertaste 4 o mas te felicita
	if(quiz.score >= 4){
		let element = document.getElementById('quiz');
		element.innerHTML = `
		<h1>result</h1>
		<img class='imgScore' src='../media/img/quiz/congrats.gif'>
		<h2 id='score'> your scores: ${quiz.score}</h2>
		<button class="btn btn-dark " type="button" onclick="location.reload()">reload</button>
		`
	}else{
		// si solo acertaste 3 o menos te invita volver a intentar
		let element = document.getElementById('quiz');
		element.innerHTML = `
		<h1>result</h1>
		<img class='imgScore' src='../media/img/quiz/fail.gif'>
		<h2 id='score'> your Scores: ${quiz.score}</h2>
		<button class="btn btn-dark " type="button" onclick="location.reload()">reload</button>
		`
	}
}


const questions = [
	new Question("¿en que episodio murio obi-wan kenobi?", ["episodio iii", "episodio vi", "episodio iv", "episodio v"], "episodio vi","<img class='imgQuiz' src='../media/img/quiz/obiwanviejo.webp'>"),
	new Question("¿quien era el maestro del conde dooku?", ["tyranus", "darth sidiou", "yoda", "qui-gon jinn"], "yoda","<img class='imgQuiz' src='../media/img/quiz/dooku.webp'>"),
	new Question("¿quien mato a qui-gon jinn?", ["darth maul", "darth tyranus", "darth sidiou", "darth vader"], "darth maul","<img class='imgQuiz' src='../media/img/quiz/qui-gon.webp'>"),
	new Question("¿qué le pasó a anakin skywalker durante la batalla con el conde dooku?", ["perdió su pierna izquierda", "perdió su mano derecho", "perdió su pierna derecha", "el perdió"], "perdió su mano derecho","<img class='imgQuiz' src='../media/img/quiz/anakin.jpg'>"),
	new Question("¿cuál es el arma preferida de chewbacca?", ["rifle bláster", "sable de luz", "club de metal", "bowcaster"], "bowcaster","<img class='imgQuiz' src='../media/img/quiz/chewbacca.gif'>"),
	new Question("¿de qué color es la pierna derecha de c-3po?", ["negro", "rojo", "plata", "dorado"], "plata","<img class='imgQuiz' src='../media/img/quiz/c-3po.gif'>"),
	new Question("¿quién hizo estallar la primera estrella de la muerte y con qué arma?", ["luke skywalker con su sable", "princesa leia con un x-wing", "luke skywalker con un x-wing", "princesa leia con un detonador térmico"], "luke skywalker con un x-wing","<img class='imgQuiz' src='../media/img/quiz/star.webp'>"),
	new Question("¿cual es el planeta natal de obi-wan kenobi?", ["stewjon", "tatooine", "naboo", "utapau"], "stewjon","<img class='imgQuiz' src='../media/img/quiz/planeta.jpg'>"),
];

let quiz = new Quiz (questions);

populate();

