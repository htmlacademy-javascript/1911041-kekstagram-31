//Функция для проверки длины строки
const checkLength = (string = '',maxSymbols) => string.length <= maxSymbols;
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
