function merge(arr1, arr2) {
    const result = [];
    let [i, j] = [0, 0];
    while (i !== arr1.length && j !== arr2.length) {
        if (arr1[i] <= arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);
    }

    if (arr1.length === i) return [...result, ...arr2.slice(arr1.length)];
    return [...result, ...arr1.slice(arr2.length)];
}

console.log(merge([1, 5, 9, 20, 25], [3, 4, 8, 19, 24, 55, 100, 150]));

