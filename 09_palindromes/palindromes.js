const palindromes = function (arg) {

    let transformed = arg;
    const remove = ['!', '.', ',', ' '];

    remove.forEach(item => {
        if (arg.includes(item)) {
            transformed = transformed.split(item).join('');
        }
    });
  
    const reversed = transformed.split('').reverse().join('');
  
    return transformed.toLowerCase() == reversed.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
