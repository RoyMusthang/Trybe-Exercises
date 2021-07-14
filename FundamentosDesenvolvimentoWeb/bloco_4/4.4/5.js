let numeros = [2, 3, 2, 5, 8, 2, 3];

function comparador (numeros){
  let numeroRepetido = 0;
  let contador = 0;
  let iNumero = 0;

  for(let i in numeros){
    let numeroAtual = numeros[i]
    for(let index in numeros){
      if(numeroAtual == numeros[i]){
        contador += 1
      }
    }
    if (contador > numeroRepetido){
      numeroRepetido = contador;
      iNumero = i
    }
    contador = 0;
  }

  return numeros[iNumero];
}
console.log(comparador(numeros))