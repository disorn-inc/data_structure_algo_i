const {performance} = require('perf_hooks');

const everyone = ['dory','bruce','martin','nemo','gill','bloat','nigel','squirt','darla','hank'];

function findNemo (array) {
    // let t0 = performance.now()
    for (let i=0; i<array.length; i++) {
        if(array[i] === 'nemo'){
            console.log('Found nemo');
            // break;
        }
    }
    // let t1 = performance.now()
    // console.log(t1-t0)
}

findNemo(everyone);