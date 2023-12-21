function findSmallestElement(arr) {
    let smallest = 9999999;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest) smallest = arr[i];
    }

    return smallest;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1