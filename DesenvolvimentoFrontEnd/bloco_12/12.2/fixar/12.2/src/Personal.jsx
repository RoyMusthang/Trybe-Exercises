import React from 'react';
import PropTypes from 'prop-types';

class Personal extends React.Component {
  render() {
    const { nameValue, emailValue, ageValue, handleChange } = this.props; // tanto os valores quanto a função foi passada via prop
    return (
      <fieldset>
        <legend>informações pessoais</legend>
          <label htmlFor="name">
            Nome:
            <input
              id="name"
              name="name"
              type="text"
              onChange={ handleChange}
              value={ nameValue }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={ handleChange }
              value={ emailValue }
            />
          </label>
          <label htmlFor="age">
            Idade:
            <select
              id="age"
              name="age"
              onChange={this.handleChange}
              value={ageValue}
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>
      </fieldset>
    );
  }
}

Personal.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  ageValue: PropTypes.string.isRequired,
};

export default Personal;
