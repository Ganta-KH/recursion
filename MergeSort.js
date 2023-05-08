function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const middle = arr.length / 2;

    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(arr1, arr2) {
    const result = [];
    let [i, j] = [0, 0];
    while (i !== arr1.length && j !== arr2.length) {
        if (arr1[i] <= arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);
    }

    if (arr1.length === i) return [...result, ...arr2.slice(j)];
    return [...result, ...arr1.slice(i)];
}

console.log(mergeSort([])); // []
console.log(mergeSort([5, 2, 18, 19, 3, 1])); // [1, 2, 3, 5, 18, 19]
console.log(mergeSort([25, 21, 11, 55, 80, 43, 36, 69])); // [11, 21, 25, 36, 43, 55, 69, 80]
console.log(mergeSort([23, 968, 753, 534, 788, 891, 485, 563])) // [23, 485, 534, 563, 753, 788, 891, 968]
