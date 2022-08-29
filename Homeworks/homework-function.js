// function reverseString(str) {
//   let string = String(str);
//   let res = '';
//   for (let i = string.length; i--;) {
//     res += string[i];
//   }
//   return res
// }

// reverseString('test');
// console.log(reverseString('test'));
// reverseString('');
// reverseString(null);
// reverseString(undefined);
// reverseString();



// let a = 10;

// for (let i = 10; i > a; --i) {
//   console.log(a);
// }

// let a = 20;

// for (let i = a; i > 1; i--) {
//   console.log(i);
// }

// function getCodeStrinfFromText(parm) {
//   let params = String(parm);
//   let res = '';
//   for (let i = 0; i < params.length; i++) {
//     res += params[i].charCodeAt() + ' ';
//   }
//   return res.trim();
// }

// console.log(getCodeStrinfFromText('string'));
// console.log(getCodeStrinfFromText(100));
// console.log(getCodeStrinfFromText(null));
// console.log(getCodeStrinfFromText(undefined));

function guessTheNumber(num) {
  // const number = Number(num);
  if (isNaN(num)) return new Error('Please provide a valid number');
  if (num < 0 || num > 10) return new Error('Please provide number in range 0-10');

  const random = Math.ceil(Math.random() * 10);
  if (random === +num) return ('You win!');
  return `You are lose, your number is ${number}, the random number is ${random}`
}

console.log(guessTheNumber('10з'));
// console.log(guessTheNumber(Math.random() * 10));


// let numb = 'abc';
// if (typeof numb !== 'numb') {
//   console.log(false);
// } else if (typeof numb === 'numb') {
//   console.log(true);
// }



// let numRandom = Math.ceil(Math.random() * 10);
// // numRandom = parseFloat(numRandom.toFixed(0))
// console.log(numRandom);