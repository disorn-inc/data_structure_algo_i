function reverse_string (string) {
    let reverse = "";
    for(let i=string.length -1 ; i>=0 ; i--){
        reverse = reverse + string[i];
        // console.log(reverse)
    }
    return reverse;
}

const test1 = "abcde";

console.log(reverse_string(test1));
// reverse_string(test1)
// console.log(test1.length)