let fistNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourtNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixtNumber = Math.ceil(Math.random() * 60);

let lotteryNumber = [fistNumber, secondNumber, thirdNumber, fourtNumber, fifthNumber, sixtNumber]

let tentaPerderAi = [ 1, 38, 52, 56, 27, 32 ]
let numeroAcertos = 0;

for (let iLottery = 0; iLottery< lotteryNumber.length; iLottery += 1){
  for (let index = 0; index < tentaPerderAi.length; index += 1){
    if (lotteryNumber[iLottery] === tentaPerderAi[index]){
      numeroAcertos += 1;
    }
  }
}