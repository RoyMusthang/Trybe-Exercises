let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let somar = 0; somar < numbers.length; somar += 1){
  resultado += numbers[somar]
}
let zoioHardcore = resultado / numbers.length;

if (zoioHardcore > 20){
  console.log("valor maior que 20")
}else {
  console.log("valor menor que 20")
}