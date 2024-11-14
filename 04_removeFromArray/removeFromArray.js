const removeFromArray = function(userInput, ...args) {
    const result = userInput.filter(item => !args.includes(item));

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
