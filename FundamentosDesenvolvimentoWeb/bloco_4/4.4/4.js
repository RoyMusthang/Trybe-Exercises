let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorQuantidade (palavra){
let maiorPalavra = palavra[0];
  for(let i in palavra){
    if (maiorPalavra.length < palavra[i].length){
      maiorPalavra = palavra[i]
    }
  }

  return maiorPalavra
}
console.log(maiorQuantidade(nomes))