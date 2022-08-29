// 1.
// function getArray(params) {
//   const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   myArray.push(params);
//   return myArray
// }
// console.log(getArray(10));

// 2.
// function doubleArray(params) {
//   return params.concat(params)
// }
// console.log(doubleArray([1, 2, 3]));

// 3.
function changeCollection(arr, arr2) {
  const res = [];
  arr.shift();
  arr2.shift();
  res.push(arr, arr2)

  return res
}

console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']))


// function changeCollection() {
//   const res = [];

//   for (let i = 0; i < arguments.length; i++) {
//     if (Array.isArray(arguments[i])) {
//       const el = arguments[i].slice();
//       el.shift();
//       res.push(el)
//     }
//   }

//   return res;
// }

// console.log(changeCollection([1, 2, 3]))