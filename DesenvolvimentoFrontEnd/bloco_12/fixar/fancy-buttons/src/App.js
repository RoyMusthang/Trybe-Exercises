import React from 'react';

function handleClick0() { // função que imprime o texto
  console.log('clicou0!')
}

function handleClick1() { // função que imprime o texto
  console.log('clicou1!')
}

function handleClick2() { // função que imprime o texto
  console.log('clicou2!')
}

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={ handleClick0 }>click aqui </button>
        <button onClick={ handleClick1 }>click aqui </button>
        <button onClick={ handleClick2 }>click aqui </button>
      </>
    ); // o evento onClick chama a função acima
  }
}

export default App;
