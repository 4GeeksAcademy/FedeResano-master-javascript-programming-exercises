function select(arr, obj){
    let newObject = {};
    arr.forEach(element => {
        if(obj[element]) {
            newObj[element] = obj[element]
        }
    });
    return newObject;
}
