let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    for(let keys in obj){
        if(typeof obj[keys] === "number" && obj[keys] < num){
            delete obj[keys];
        }
    }
    return obj;
}
