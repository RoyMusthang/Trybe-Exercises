const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, cur) => {
    return acc.concat(cur)
  }, [])
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);