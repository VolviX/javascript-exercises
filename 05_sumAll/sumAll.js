const sumAll = function(valueOne, valueTwo) {    
    if (
        (!Number.isInteger(valueOne) || !Number.isInteger(valueTwo))
        || (valueOne < 0 || valueTwo < 0) 
    ) {
        return 'ERROR';
    } 

    if (valueOne <= valueTwo) {
        min = valueOne;
        max = valueTwo;
    } else {
        min = valueTwo;
        max = valueOne;
    }

    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
