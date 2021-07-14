let custo = 7;
let valor = 10;
let governoLadrao = 20 / 100;
let valorCustoTotal = custo + governoLadrao;
let lucro = valor - valorCustoTotal;

if (custo == 0 || valor == 0){
  console.log('ERRO')
}
else {
  console.log(lucro)
}