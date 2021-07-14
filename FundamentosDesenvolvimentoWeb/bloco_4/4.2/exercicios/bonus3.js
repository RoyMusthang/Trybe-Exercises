let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicado = [];

for (let index = 0; index < array.length; index += 1) {
  if (index + 1 < array.length){
    multiplicado.push(array[index] * array[index + 1]);
  }else {
    multiplicado.push(array[index]* 2);
  }
}
console.log(multiplicado)