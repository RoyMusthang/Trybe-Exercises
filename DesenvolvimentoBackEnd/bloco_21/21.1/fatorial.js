const readline = require('readline-sync');

function fatorial(question) {
  let result = 1;
  for (let index = 1; index <= question; index += 1) {
    result *= index;
  }
  return result;
}

function print() {

  const question = readline.questionInt('Qual o número?');
  const resultado = fatorial(question);

  console.log(resultado);
}

print()
