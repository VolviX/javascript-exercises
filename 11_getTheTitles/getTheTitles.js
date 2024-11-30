const getTheTitles = function(arg) {
    let list = [];

	for (let i = 0; i < arg.length; i++) {
		list.push(arg[i].title);
	}
	
    return list;
};

// Do not edit below this line
module.exports = getTheTitles;
