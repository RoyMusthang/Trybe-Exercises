import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Click0: 0,
      Click1: 0,
      Click2: 0,
    }

    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick0 = () => {
    this.setState((estadoAnterior, _props) => ({
    Click0: estadoAnterior.Click0 + 1
    }), () => {
    console.log(this.buttonColor(this.state.Click0));
    });
  }
  
  handleClick1 = () => {
    this.setState((estadoAnterior, _props) => ({
      Click1: estadoAnterior.Click1 + 1
    }), () => {
      console.log(this.buttonColor(this.state.Click1));
    });
  }
  
  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      Click2: estadoAnterior.Click2 + 1
    }), () => {
      console.log(this.buttonColor(this.state.Click2));
    });
  }

  buttonColor(num) {
    if (num % 2 === 0) return 'green';
    return 'white';
  }

  render() {
    const { Click0, Click1, Click2 } = this.state;
    return (
      <>
        <button style={{ backgroundColor: this.buttonColor(Click0) }} onClick={ this.handleClick0 }>{this.state.Click0}</button> {/* o conteudo eo contador */}
        <button style={{ backgroundColor: this.buttonColor(Click1) }}  onClick={ this.handleClick1 }>{this.state.Click1}</button> 
        <button style={{ backgroundColor: this.buttonColor(Click2) }}  onClick={ this.handleClick2 }>{this.state.Click2}</button> 
      </>
    );
  }
}

export default App;
