const fibonacci = function(arg) {

    if (arg == 0) return 0;
    if (arg < 0) return 'OOPS';

	let list = [1, 1];
    
    for (let i = 1; i <= arg-2; i++) {
      let newNumber = list.at(-1) + list.at(-2);
      list.push(newNumber);
    }
  
	return list.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
