function palavraFinal(word, end){
 word = word.split('');
 end = end.split('');
 verificacao = true;
 for (let i = 0; i < end.length; i += 1){
   if(word[word.length - end.length + i] != end[i]){
    verificacao = false;
   }
 }
  return verificacao;
}
console.log(palavraFinal('trybe', 'be'));