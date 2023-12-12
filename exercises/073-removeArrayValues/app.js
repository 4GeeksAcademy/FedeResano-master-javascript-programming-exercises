function removeArrayValues(obj) {
    for(let keys in obj){
        if(Array.isArray(obj[keys])){
            delete obj[keys];
        }
    }
    return obj;
}