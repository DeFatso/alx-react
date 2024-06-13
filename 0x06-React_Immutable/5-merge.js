const { concatElements, mergeElements } = require('./3-list');

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(concatElements(array1, array2).toString());
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 20, c: 30, d: 40 };
console.log(mergeElements(object1, object2).toString());