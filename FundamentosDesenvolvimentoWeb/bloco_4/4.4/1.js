function verificaPolidromo (palavra){
  let palavraInvertida = palavra.split('');
  let verificacao = false;
  for (let key in palavra){
    if (palavra[key] === palavra[(palavra.length - 1) - key]) {
      verificacao = true;
    }
  }
  return verificacao;
}
console.log(verificaPolidromo('mamaco'))