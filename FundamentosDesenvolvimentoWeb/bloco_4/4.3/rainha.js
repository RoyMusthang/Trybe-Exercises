let linhaDama = 4;
let colunaDama = 4;

let linhaOponente = 1;
let colunaOponente = 7;

let ataqueBemSucedido = false;

if ((linhaDama === linhaOponente) || (colunaDama === colunaOponente)){
  ataqueBemSucedido = true;
}

// iSupDir = Indece da diagonal superior direita
for (let iSupDir = 1; iSupDir < 8; iSupDir += 1){
  let linhaAtualDama = linhaDama + iSupDir;
  let colunaAtualDama = colunaDama + iSupDir;

  if ((linhaAtualDama > 8)||(colunaAtualDama > 8)){
    break;
  }

  if ((linhaOponente === linhaAtualDama) && (colunaOponente === colunaAtualDama)){
    ataqueBemSucedido = true;
  }
}

// diagonal inferior esquerda
for (let iInfEsq = 1; iInfEsq < 8; iInfEsq += 1){
  let linhaAtualDama = linhaDama - iInfEsq;
  let colunaAtualDama = colunaDama - iInfEsq;

  if((linhaAtualDama < 1)||(colunaAtualDama < 1)){
    break;
  }

  if ((linhaOponente === linhaAtualDama) && (colunaOponente === colunaAtualDama)){
    ataqueBemSucedido = true;
  }
}

// diagonal superior esquerda
for (let iSupEsq = 1; iSupEsq < 8; iSupEsq += 1){
  let linhaAtualDama = linhaDama + iSupEsq;
  let colunaAtualDama = colunaDama - iSupEsq;

  if((linhaAtualDama > 8)||(colunaAtualDama < 1)){
    break;
  }

  if ((linhaOponente === linhaAtualDama) && (colunaOponente === colunaAtualDama)){
    ataqueBemSucedido = true;
  }
}

// diagonal inferior direita
for (let iInfDir = 1; iInfDir < 8; iInfDir += 1){
  let linhaAtualDama = linhaDama - iInfDir;
  let colunaAtualDama = colunaDama + iInfDir;

  if((linhaAtualDama < 1)||(colunaAtualDama > 8)){
    break;
  }

  if ((linhaOponente === linhaAtualDama) && (colunaOponente === colunaAtualDama)){
    ataqueBemSucedido = true;
  }
}


console.log("ataque é possivél:", ataqueBemSucedido)
