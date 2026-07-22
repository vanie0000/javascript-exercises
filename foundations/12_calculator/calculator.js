let a;
let b;
let arr;

const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) { 
  const res = arr.reduce((summ, value) => { 
    return summ += value; 
  }, 0); 
  return res; 
};


const multiply = function(arr) {
  const res = arr.reduce((product, value) => {
    return product *= value;
  }, 1)
  return res;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let res = 1;
	for (let i = 1; i <= a; i += 1){
    res *= i
  }
  return res
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
