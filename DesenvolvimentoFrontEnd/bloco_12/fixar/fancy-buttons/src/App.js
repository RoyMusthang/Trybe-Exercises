import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);

    this.state = {
      handleClick0: 0,
      handleClick1: 0,
      handleClick2: 0,
    }
  }

  handleClick0 = () => {
    this.setState((estadoAnterior, _props) => ({
      handleClick0: estadoAnterior.handleClick0 + 1
    }))
  }
  
  handleClick1 = () => {
    this.setState((estadoAnterior, _props) => ({
      handleClick1: estadoAnterior.handleClick1 + 1
    }))
  }
  
  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      handleClick2: estadoAnterior.handleClick2 + 1
    }))
  }

  render() {
    return (
      <>
        <button onClick={ this.handleClick0 }>{this.state.handleClick0}</button> {/* o conteudo eo contador */}
        <button onClick={ this.handleClick1 }>{this.state.handleClick1}</button>
        <button onClick={ this.handleClick2 }>{this.state.handleClick2}</button>
      </>
    );
  }
}

export default App;
