const readline = require('readline-sync');

	const peso = readline.questionFloat('Qual seu peso?');
	const altura = readline.questionFloat('Qual sua altura?');
	const result = (peso / (altura * altura)).toFixed(2);

	if (result < 20){
		console.log(`Seu IMC é ${result}, você está abaixo do peso!`)
	} else if (result >= 20 && result < 25) {
		console.log(`Seu IMC é ${result}, você está no peso ideal!`)
	} else if (result >= 25 && result < 29) {
		console.log(`Seu IMC é ${result}, você está acima do peso!`)
	} else if (result >= 29 && result < 35) {
		console.log(`Seu IMC é ${result}, você está obeso!`)
	} else {
		console.log(`Seu IMC é ${result}, você está extremamente obeso!`)
	}
