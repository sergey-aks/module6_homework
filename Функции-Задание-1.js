/*
***
Функции. Задание 1.

В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
*/

let arr = [1,2,3,4,5,6,7,88,99,0,"abc",null,NaN,undefined,true,Symbol("foo")];
let oddNum = 0;
let evenNum = 0;
let zeroNum = 0;
let other = 0;

function countArrayItems(arr,oddNum,evenNum,zeroNum,other){
  arr.forEach(function(item){
    if(item === 0){
      zeroNum++;
    }
    else if(typeof item === 'string' || typeof item === 'object' || typeof item === 'undefined' || typeof item === 'boolean' || typeof item === 'symbol' || typeof item === 'bigint' || isNaN(item)){
      other++;
    }
    else if(item%2 === 0){
      evenNum++;
    }
    else{
      oddNum++;
    }
  });
  return result = `всего ${arr.length} элементов массива, из них чётных чисел: ${evenNum} шт, нечётных: ${oddNum} шт, нулей: ${zeroNum} шт, других типов: ${other} шт`;
}

countArrayItems(arr,oddNum,evenNum,zeroNum,other);

console.log(result);