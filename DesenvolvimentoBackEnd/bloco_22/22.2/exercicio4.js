const fs = require('fs').promises;

async function readle() {
  try {
    const rea = await fs.readFile('./simpsons.json', 'utf8')
    .then((read) => JSON.parse(read));
    const result = rea.map(({ id, name }) => `${id} - ${name}`);
    return result.forEach(element => console.log(element));
  } catch (err) {
    console.error(err)
  }
}


readle()
  // .then((read) => JSON.parse(read));
