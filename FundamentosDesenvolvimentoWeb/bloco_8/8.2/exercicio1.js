const assert = require('assert');

const books = [
{
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
},
{
  id: 2,
  name: 'O Senhor dos Anéis',
  genre: 'Fantasia',
  author: {
    name: 'J. R. R. Tolkien',
    birthYear: 1892,
  },
  releaseYear: 1954,
},
{
  id: 3,
  name: 'Fundação',
  genre: 'Ficção Científica',
  author: {
    name: 'Isaac Asimov',
    birthYear: 1920,
  },
  releaseYear: 1951,
},
{
  id: 4,
  name: 'Duna',
  genre: 'Ficção Científica',
  author: {
    name: 'Frank Herbert',
    birthYear: 1920,
  },
  releaseYear: 1965,
},
{
  id: 5,
  name: 'A Coisa',
  genre: 'Terror',
  author: {
    name: 'Stephen King',
    birthYear: 1947,
  },
  releaseYear: 1986,
},
{
  id: 6,
  name: 'O Chamado de Cthulhu',
  genre: 'Terror',
  author: {
    name: 'H. P. Lovecraft',
    birthYear: 1890,
  },
  releaseYear: 1928,
},
];

// Adicione o código do exercício aqui:
// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// function authorBornIn1947() {
//   return books.find((book) => book.author.birthYear === 1947).author.name;
// }
// assert.strictEqual(authorBornIn1947(), 'Stephen King');

function smallerName() {
  let nameBook = 'waefohweoiçfhwẽ]ÃWEFJOPWAF]~Fe';
  // escreva aqui o seu código
  books.forEach((book) => {
    let aut = book.name;
    if (aut.length < nameBook.length){
      nameBook = aut
    }
  })
  //  jeito sobrio de fazer
  if (!nameBook || book.name.length < nameBook.length) {
    nameBook = book.name;
}

  Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// assert.strictEqual(smallerName(), 'Duna');

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook() {
//   return books.find((book) => book.name.length === 26)
// }

// assert.deepStrictEqual(getNamedBook(), expectedResult);

// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

// function booksOrderedByReleaseYearDesc() {
//   books.sort((a, b) => b.releaseYear - a.releaseYear)
//   return books
// }

// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000)
// }

// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//   return books.some((book) => book.releaseYear <= 1980 && book.releaseYear <= 1989)
// }

// assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

assert.strictEqual(authorUnique(), expectedResult);

