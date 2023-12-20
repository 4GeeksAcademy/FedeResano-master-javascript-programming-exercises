function getEvenLengthWordsAtProperty(obj, key) {
  if (obj[key] && Array.isArray(obj[key])) {
    return obj[key].filter(element => element.length % 2 === 0);
  } else {
    return [];
  }

}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
