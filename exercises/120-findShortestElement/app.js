function findShortestElement(arr) {
    let shortest = 9999;
    let str = "";
    
    for (let i = 0; i < arr.length; i++){
        if(arr[i].length < shortest) str = arr[i];
    }

    return str;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'