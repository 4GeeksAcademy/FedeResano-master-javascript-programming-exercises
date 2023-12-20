function getElementsGreaterThan10AtProperty(obj, key) {
    if (obj[key] && Array.isArray(obj[key])) {
        return obj[key].filter(element => element < 10);
    } else {
        return [];
    }
}