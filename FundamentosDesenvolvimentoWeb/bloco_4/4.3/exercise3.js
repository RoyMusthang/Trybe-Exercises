let number = 7;
let asterisco = "*"
let linha = "";
let posicao = number;

for (let index = 1; index <= number; index += 1){
  for (let coluna = 1; coluna <= number; coluna += 1){
    if (coluna < posicao){
      linha = linha + ' ';
    }else{
      linha = linha + "*";
    }

  }
  console.log(linha)
  linha = "";
  posicao -= 1;;
}
