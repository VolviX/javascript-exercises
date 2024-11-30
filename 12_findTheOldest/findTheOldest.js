const findTheOldest = function(arg) {
    let oldest = 0;
	let name;
    
    for (let i = 0; i < arg.length; i++) {
		
        if (typeof arg[i].yearOfDeath !== 'number') {
			arg[i].yearOfDeath = 2024;
		}
		
        let age = arg[i].yearOfDeath - arg[i].yearOfBirth;

        if (age > oldest) {
            oldest = age;
			name = arg[i];
        }
    }
	
	console.log(name);
    return name;
};

// Do not edit below this line
module.exports = findTheOldest;
