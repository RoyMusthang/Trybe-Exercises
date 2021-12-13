const readline = require('readline-sync');
const number = parseInt(Math.random() * 10) 
const inputUser = readline.questionInt('Tente um numero!!');

if (inputUser === number){
	console.log(`Parabéns seu acertou!`);
} else {
	console.log(`Errou o numero certo é ${number}`)
}

