let cont = []
function somador (num){
  let soma = 0;
  for (let i = 1; i <= num; i += 1){
    soma = i + soma;
    cont.push(i)
  }

  return soma
}
console.log( somador(5))