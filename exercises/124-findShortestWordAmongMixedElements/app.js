function findShortestWordAmongMixedElements(arr) {
    let aux = 999;
    let shortest = "";
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == "string"){
            if(arr[i].length < aux){
                shortest = arr[i];
                aux = arr[i].length;
            } 
        }
    }
    
    return shortest;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
