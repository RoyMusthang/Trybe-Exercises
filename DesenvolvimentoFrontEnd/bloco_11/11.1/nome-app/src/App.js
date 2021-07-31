import React from 'react';
    import './App.css';

    const Task = (value, key) => { 
      return (
        <li key={key}>{value}</li> 
      );
    }

    const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar']; 

    class App extends React.Component {
      render() {
        return (
          <ul>{ tarefas.map((tarefa, index) => Task(tarefa, index))}</ul> 
        );
      }
    }
    
    export default App;