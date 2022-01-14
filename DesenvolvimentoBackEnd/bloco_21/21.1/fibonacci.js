const readline = require('readline-sync');

function fibonacci (num) {
  let fib = [0, 1];
  for (let i = 2; i < num; i += 1) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  const result = fib.join();
  return result;
};

function questionInt() {
  const question = readline.questionInt('Fala um numero ai menor\n')
  const resultado = fibonacci(question);
  console.log(resultado);
}

questionInt();
