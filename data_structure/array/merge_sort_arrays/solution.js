function mergeSortArrays(array1, array2){
    const mergeArray = [];
    let i = 0;
    let j = 0;
    let array1Item = array1[i];
    let array2Item = array2[j];


    while(array1Item || array2Item) {
        if(!array2Item || array1Item < array2Item) {
            mergeArray.push(array1Item);
            i++;
            array1Item = array1[i];
        } else {
            mergeArray.push(array2Item);
            j++;
            array1Item = array2[j];
        }
    }
}

console.log(!5)