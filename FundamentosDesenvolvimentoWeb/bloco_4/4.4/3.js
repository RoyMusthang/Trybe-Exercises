function verificacao (array){
  let menor = 0;

  for (let key in array){
    if (array[menor] > array[key]){
      menor = key
    }
  }
  return menor
}
console.log(verificacao ([2, 4, 6, 7, 10, 0, -3]))