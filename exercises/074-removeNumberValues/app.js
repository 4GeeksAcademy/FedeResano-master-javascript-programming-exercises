function removeNumberValues(obj) {
    for(let keys in obj){
        if(typeof obj[keys] == "number"){
            delete obj[keys];
        }
    }
    return obj;
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
