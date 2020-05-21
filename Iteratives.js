'use strict';

//1
function iterativeSheep(num) {
  for(let i=num; i>0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
}
//iterativeSheep(3);

//2
function powerCalculator(integer, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent < 0) {
    return 'Exponent must be >= 0';
  }
  let product = 1;
  for (let i =0; i < exponent; i++) {
    product *= integer;
  }
  return product;
}
//console.log(powerCalculator(10, 2));

//3
function reverseString(word) {
  let newWord = '';
  for(let i = word.length - 1; i >= 0; i--) {
    newWord += word.charAt(i);
  }
  console.log(newWord);
}
//reverseString('hammer');

//4
function nthTriangular(num) {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    counter += i;
  }
  console.log(counter);
}
//nthTriangular(7);

//5
function stringSplitter(word, splitter) {
  let currentItem = '';
  let itemArry = [];

  for(let i = 0; i < word.length; i++) {
    if (word.charAt(i) !== splitter) {
      currentItem += word.charAt(i);
    } else {
      itemArry.push(currentItem);
      currentItem = '';
    }
  }
  return  itemArry;
}
//console.log(stringSplitter('02/20/2020', '/'));

//6
function fibonacci(n) {
  let fibonacciStart = [0, 1];
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      console.log(fibonacciStart[i]);
    }
    else {
      let newFib = fibonacciStart[i - 2] + fibonacciStart[i - 1];
      console.log(newFib);
      fibonacciStart.push(newFib);
    }
  }
}
//console.log(fibonacci(7));

//7
function factorial(n) {
  let product = n;
  for (let i = n - 1; i > 0; i--) {
    product *= i;
  }
  return product;
}
console.log(factorial(5));