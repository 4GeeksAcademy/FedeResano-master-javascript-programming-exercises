let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for(let keys in obj2){
        if(!(keys in obj1)){
            obj1[keys] = obj2[keys];
        }
    }
    return obj1;
}