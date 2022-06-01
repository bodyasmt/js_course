function colourAssociation(array){
	let result = [];
	array.reduce((obj, elem) => {
		obj = {};
		obj[elem[0]] = elem[1];
		return result.push(obj);
	}, {});
	
	return result;
}