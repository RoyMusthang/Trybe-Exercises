let salarioBruto = 8900;
let inss;

if (salarioBruto <= 1556.95) {
  inss = salarioBruto * 0.08;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92 ){
  inss = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  inss = salarioBruto * 0.11;
}
else {
  inss = 570.88;
}

let imposto;
let salarioLiquido = salarioBruto - inss;

if (salarioLiquido <= 1903.98) {
  imposto = 0;
}
else if (salarioLiquido <= 2826.65) {
  imposto = (salarioLiquido * 0.075) - 142.80;
}
else if (salarioLiquido <= 3751.05) {
  imposto = (salarioLiquido * 0.15) - 354.80;
}
else if (salarioLiquido <= 4664.68) {
  imposto = (salarioLiquido * 0.225) - 636.13;
}
else {
  imposto = (salarioLiquido * 0.275) - 869.36;
}

console.log("tai ai o que sobrou pra tu :" + (salarioLiquido - imposto));
