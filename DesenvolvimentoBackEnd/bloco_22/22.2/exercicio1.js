function readFiles(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      reject('Informe apenas números');
    }
    const calc = (a + b) * c;
    if (calc < 50) {
      return reject('Numeros muito baixos');
    }
    resolve(calc);
  });
}


async function numberRamdom() {
  const one = Math.floor(Math.random() * 100 + 1);
  const two = Math.floor(Math.random() * 100 + 1);
  const three = Math.floor(Math.random() * 100 + 1);

  try {
    const result = await readFiles(one, two, three)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
};

numberRamdom();
