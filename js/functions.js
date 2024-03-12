//Функция для проверки длины строки
const checkLength = (string = ' ',maxSymbols) => string.length <= maxSymbols;
checkLength();

//Функция для проверки на палиндром
const isPalindrome = (string) => {
  let invertString = '';
  string = string.toLowerCase().replace(' ','');
  for (let i = string.length - 1; i >= 0; i--){
    invertString += string[i];
  }
  return string === invertString;
};

isPalindrome('Казак');

//Функция для извлечения цифр от 0 до 9
const exractNum = (string) => {
  let result = '';

  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++){
    if(Number.isNaN(parseInt(string[i],10)) === false){
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};

exractNum('2023 год');

function countTime (startTime, endTime, meetTime, spanMeet) {

  startTime = startTime.split(':');
  startTime = startTime[0] * 60 + +startTime[1];
  endTime = endTime.split(':');
  endTime = endTime[0] * 60 + +endTime[1];
  meetTime = meetTime.split(':');
  meetTime = meetTime[0] * 60 + +meetTime[1];

  if (startTime > meetTime || endTime < (meetTime + spanMeet)) {
    return false;
  }
  return true;
}

console.log(countTime('08:00', '17:30', '14:00', 90));
console.log(countTime('8:0', '10:0', '8:0', 120));
console.log(countTime('08:00', '14:30', '14:00', 90));
console.log(countTime('14:00', '17:30', '08:0', 90));
console.log(countTime('8:00', '17:30', '08:00', 900));
