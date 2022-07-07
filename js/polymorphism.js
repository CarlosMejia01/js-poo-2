function countItems(x) {
  return x.toString().length;
}

console.log(countItems(10));
console.log(countItems("Hola Mundo"));

function sum(x = 0, y = 0, z = 0) {
  return x + y + z;
}

console.log(sum(10, 20, 30));
