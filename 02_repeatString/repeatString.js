const repeatString = function(str, num) {
    let result = [];
    
    if (num < 0) {
        a = 'ERROR';
        return a;
    }

    for (i = 0; i < num; i++) {
        result.push(str);
    }

    return result.join('');
};

// Do not edit below this line
module.exports = repeatString;
