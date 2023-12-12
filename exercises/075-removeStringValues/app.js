function removeStringValues(obj) {
    for(let keys in obj){
        if(typeof obj[keys] == "string"){
            delete obj[keys];
        }
    }
    return obj;
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
