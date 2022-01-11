function readFiles(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
      reject('Informe apenas números');
    }
    const calc = (a + b) * c
    if (calc < 50) {
      return reject('Numeros muito baixos')
    }
    return resolve;
  })
}

readFiles(110, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

// readFiles(1, 1, 'a')
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))
//
// readFiles(1, 1, 1)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))
