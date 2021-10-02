function reverse(str) {
    const reverseStr = [];
    const item = str.length;
    for(let i=item-1; i>=0; i-- ) {
        reverseStr.push(str[i]);
    }
    return reverseStr.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('')
}

const reverse3 = (str) => {
    return [...str].reverse().join('');
}

const test1 = "Hi I'm Disorn";

console.log(reverse3(test1));