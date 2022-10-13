/*
***
Функции. Задание2

Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
*/

function checkNumber(num) {
    if (!isNaN(parseFloat(num)) && isFinite(num)){
        if(num < 2 || num > 1000){
          return 'данные неверны';
        }
        else{
          if(Number.isInteger(num)){
            for(let i = 2; i < num; i++){
              if(num % i === 0) return `${num} - составное число`;
            }
            return `${num} - простое число`;
          }
          else{
            return 'это не целое число';
          }
        }
    }
    else{
        return 'это не число';
    }
  }
  
  console.log(checkNumber(997));