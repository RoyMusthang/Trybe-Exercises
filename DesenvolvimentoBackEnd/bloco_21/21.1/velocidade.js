const readline = require('readline-sync');

const dist = readline.questionFloat("Qual a distância?");
const temp = readline.questionFloat("Qual o tempo?");

console.log(dist / temp)
