const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((total, item) => total + item, 0);
};

const multiply = function(a) {
  return a.reduce((total, item) => total * item, 1);
};

const power = function(arg, kwarg) {
  return arg ** kwarg;
};

const factorial = function(arg) {
	let total = 1;

  for (let i = 1; i <= arg; i++) {
    total *= i;
  }
  
  return total;
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
