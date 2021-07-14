const fatoral = num => {
  let result = 1

  for (let index = 2; index <= num; index += 1) {
    result *= index
  }
  return result
}
console.log(fatoral(4))

const maiorP = text => {
  let frase = text.split(' ');
  let maxLength = 0
  let result = ''

  for (palavra of frase){
    if (palavra.length > maxLength){
      maxLength = palavra.length;
      result = palavra
    }
  }
  return result
}
console.log(maiorP("Antonio foi no banheiro e não sabemos o que aconteceu"));


const hero = {
  name: 'mamaco';
  lastName: 'muca';


}