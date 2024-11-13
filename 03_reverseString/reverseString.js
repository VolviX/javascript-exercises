const reverseString = function(str) {
    const input = str.split('');
    const output = [];

    for (let i = input.length - 1; i > -1; i--) {
        output.push(input[i]);
    }

    return output.join('');
};

// Do not edit below this line
module.exports = reverseString;
