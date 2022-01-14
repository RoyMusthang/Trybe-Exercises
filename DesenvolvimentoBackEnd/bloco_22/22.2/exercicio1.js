function readFiles(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      reject('Informe apenas números');
    }
    const calc = (a + b) * c
    if (calc < 50) {
      return reject('Numeros muito baixos');
    }
    return resolve;
  })
}


function numberRamdom() {
  const one = Math.floor(Math.random() * 100 + 1);
  const two = Math.floor(Math.random() * 100 + 1);
  const three = Math.floor(Math.random() * 100 + 1);

  readFiles(one, two, three)
    .then(result => console.log(result))
    .catch(err => console.log(err));
};

console.log(numberRamdom());
