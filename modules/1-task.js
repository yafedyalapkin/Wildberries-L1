// Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом. 
// Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).


function palindrome(string) { // 1-ый вариант
  const clearedStr = string.replace(/\s/g, ''); // 1. удаляю пробелы в строке
  let reverseString = [...clearedStr].reverse().join(''); // 2. добавляю в массив элементы строки, разворачиваю, получаю строку из массива
  return (clearedStr === reverseString) ? 'Это палиндром' : 'Это не палиндром'; // 3. проверяю на полиндром
}
console.log(palindrome('аргентина манит негра'));


function palindrome2(string) { // 2-ой вариант
  const clearedStr = string.replace(/\s/g, ''); // 1. удаляю пробелы в строке

  let reverseString = ''; // 2. создаю новую строку
  for (let i = clearedStr.length - 1; i >= 0; i--) { // 3. пишу цикл, где i изначально = кол-ву символов в очищенной от проболов строке
    reverseString += clearedStr[i]; // 4. добавляю каждый элемент с конца
  }
  return (clearedStr === reverseString) ? 'Это палиндром' : 'Это не палиндром'; // 5. проверяю на полиндром
}
console.log(palindrome2('аргентина манит негра'));