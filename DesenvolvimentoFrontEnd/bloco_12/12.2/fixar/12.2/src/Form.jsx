import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '', // estado padrão do email.
      usuario: '', // estado padrão do nome
      textArea: 'observações aqui', // estado padrão do text area
    };

    this.handleChangeName = this.handleChangeName.bind(this); // sintaxe do bind para que as funções sejam vistas pelo react
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
  }

  handleChangeName(event) { // função que muda o Nome
    this.setState({
      usuario: event.target.value,
    });
  }

  handleChangeEmail(event) { // função que muda o email
    this.setState({
      email: event.target.value,
    });
  }

  handleChangeTextArea(event){ // função que muda o text area
    this.setState({
      textArea: event.target.value,
    });
  }

  render() {
    const { email, usuario, textArea } = this.state; // setando os estados dentro do render

    return (
      <div>
        <h1>formulario</h1>
        <form className="form">
          <label htmlFor="name">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
              onChange={ this.handleChangeName }
              value={ usuario }
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={ this.handleChangeEmail }
              value={ email }
            />
          </label>

          <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              defaultValue=""
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label htmlFor="textArea">
            Notação:
            <textarea
              id="textArea"
              name="textArea"
              onChange={this.handleChangeTextArea}
              value={textArea}
            />
          </label>

        </form>
      </div>
    );
  }
}

export default Form;
