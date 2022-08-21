1.
// 0 || 'string'; // Вернет 'string' т.к оператор проверит все значения и вернет последнюю истину. 
// 1 || 'string'; // 1. Потому что - первая истина.
// null || 25; // 25. Последняя истина.
// null && 25; // null т.к оператор вернет первую ложь.
// null || 0 || 35; // 35. Т.к оператор проверит все значения и вернет последнюю истину.
// null && 0 && 35; // null т.к оператор вернет первую ложь.


2.
// 12 + 14 + '12' // 2612. Прошла конкатенация строки и числа. Получим склеивание строки и числа.
// 3 + 2 - '1' // 4. Потому что нет оператора (+). В итоге получим простое арифметическое действие.
// '3' + 2 - 1 // 31. Сначала "склеивание" а затем вычитание.
// true + 2 // 3 (1+2)
//   + '10' + 1 // 11. Оператор (+) преобразовывает строковое значение в числовое. В итоге 10 + 1 = 11.
// undefined + 2 // NaN.
// null + 5 // 0 + 5 = 5
// true + undefined // NaN

3.
// let user = 'hidden';

// if (user === 'hidden') {
//   console.log(user + ': ' + 'visible');
// } else {
//   console.log(user);
// }

4.
// let user = 5;

// if (user === 0) {
//   console.log(user = 1);
// } else if (user < 0) {
//   console.log('less then zero');
// } else if (user >= 0) {
//   console.log(user * 10);
// }

5.
// let car = {
//   name: 'Lexus',
//   age: 10,
//   create: 2008,
//   needRepair: false
// };

// if (car.age > 5) {
//   console.log('Need Repair');
//   car.needRepair = true;
// } else {
//   car.needRepair = false
// }
// console.log(car);

6.
// let item = {
//   name: 'inter core i7',
//   price: '100$',
//   discount: '15%'
// };

// if (item.price !== NaN && item.discount !== NaN) {
//   item.priceWithDiscount = `${parseFloat(item.price) - parseFloat(item.price) * parseFloat(item.discount) / 100}$`;
// } else if (item.hasOnwProperty(discount)) {
//   console.log('price');
// }

// console.log(item);


// решение от преподавателя //
// let item = { name: 'Intel core i7', price: '100$', discount: '15%' }
// // мы выносим цену и скидку в отдельные переменные что бы несколько раз не вызывать parseFloat
// const price = parseFloat(item.price);
// const discount = parseFloat(item.discount);
// // проверяем что цена и скинда не являются NaN так как это важно при расчетах
// if (!isNaN(price) && !isNaN(discount)) {
//   const priceWithDiscount = price - (price * (discount / 100));
//   console.log(priceWithDiscount)
// } else {
//   console.log(price);
// }

7.
// let product = {
//   name: 'Яблоко',
//   price: '10$'
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
//   console.log('Яблоко');
// } else {
//   console.log('Товаров не найдено');
// }

// console.log(product);