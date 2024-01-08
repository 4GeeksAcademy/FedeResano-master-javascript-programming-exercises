function convertObjectToList(obj) {
	let arr = [];

	for(let key in obj){
		arr.push([key, obj[key]]);
	}

	return arr;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
