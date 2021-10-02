function mergeSortArrays(array1, array2) {
    // console.log(array1,array2)
    const merge_array = array1.concat(array2);
    console.log(merge_array)
    // console.log(merge_array)
    const sort_array = merge_array.sort((a,b) => a-b);
    return sort_array;
}

const test1 = [8,5,9,4];
const test2 = [1,87,4];

// const test3 = test1.push(test2);
// console.log(test3)

console.log(mergeSortArrays(test1, test2))

console.log(!undefined)