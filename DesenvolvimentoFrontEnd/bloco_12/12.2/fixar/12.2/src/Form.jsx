import React, { Component } from 'react';
import Personal from './Personal'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: '', // estado padrão do email.
      usuario: '', // estado padrão do nome
      textArea: 'observações aqui', // estado padrão do text area
      age: '', // estado padrão da idade
      terms: false, // estado dos termos de usuario
    };

    this.handleChange = this.handleChange.bind(this); // sintaxe do bind para que as funções sejam vistas pelo react
  }

  handleChange({ target }) { // agora temos apenas uma função controladora com essa sintaxe padrão
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, usuario, textArea, age, terms } = this.state; // setando os estados dentro do render

    return (
      <>
        <form className="form">
          <h1>formulario</h1>
          <Personal
            nameValue={ usuario }
            emailValue={ email }
            ageValue={ age }
            handleChange={ this.handleChange }
          />
          <fieldset>
            <legend>informações adicionais</legend>
              <label htmlFor="textArea">
                Notação:
                <textarea
                  id="textArea"
                  name="textArea"
                  onChange={this.handleChange}
                  value={textArea}
                  />
              </label>
              <label htmlFor="terms">
                <input
                  id="terms"
                  type="checkbox"
                  name="terms"
                  onChange={this.handleChange}
                  value={terms}
                  />
                Concordo com termos e acordos
              </label>
              <label htmlFor="">
                arquivo adicional
                <input type="file" />
              </label>
            </fieldset>
        </form>
      </>
    );
  }
}

export default Form;
