const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const buttonSub = document.querySelector('.btn-submit');
const buttonClear = document.querySelector('.btn-clear')

function criaEstados() {
  let containerEstados = document.getElementById('select-estado')

  for (let index = 0; index < estados.length; index += 1){
    let estado = document.createElement('option');
    containerEstados.appendChild(estado).innerText = estados[index];
    containerEstados.appendChild(estado).value = estados[index];
  }
}

function valideData (){

}

function submitPai(event){
  event.preventDefaut();
}
 
function limpaDados (){
  dadosForm.innerHTML = null
}

buttonSub.addEventListener('click', submitPai);
buttonClear.addEventListener('click', limpaDados);
criaEstados();