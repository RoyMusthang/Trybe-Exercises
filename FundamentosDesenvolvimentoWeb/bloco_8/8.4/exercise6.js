// const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notes = [[], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const alunos = students.map((aluno, index) => ({ 
    name: aluno, 
    average: (notes[index].reduce((acc, nota) => acc + nota) / notes[index].length), 
  }));
  return alunos
}
console.log(studentAverage());



// function studentAverage() {
//   return alunos.map((aluno, index) => {
//     return {
//     name: aluno,
//     average: notas[index].reduce((acc, nota) => acc + nota) / notas[index].length 
//   }})
// }

// function studentAverage() {
//   const nameAndAverage = students.map((student, index) => ({
//     name: student,
//     average: (notes[index].reduce((acc, curr) => acc + curr, 0) / notes[index].length),
//   }));
//   return nameAndAverage;
// }

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

// assert.deepStrictEqual(studentAverage(), expected);