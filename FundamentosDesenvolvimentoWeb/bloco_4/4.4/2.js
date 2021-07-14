let numeros = [2, 3, 6, 7, 10, 5];
function verificacao (array){
  let maior = 0;
  for (let key in array){
    if (array[maior] < numeros[key]){
      maior = key;
    }
  }
  return maior
}   
console.log(verificacao (numeros))