const fs = require('fs');
const readline = require('readline-sync');

async function getJson(id) {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf8')
      .then((file) => JSON.parse(file));
    const findData = data.find((elem) => Number(elem.id) === id)
    return findData;
  } catch (err) {
    console.error('id não encontrado', err);
  }
}

function question() {
  const question = readline.questionInt('Qual id você busca?\n');
  const result = getJson(question);
  console.log(result);
}

question()
