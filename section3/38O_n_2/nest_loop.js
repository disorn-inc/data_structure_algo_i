const boxes = [1,2,3,4,5];

function logDouble (array) {
    array.forEach(x => {
        array.forEach(y => {
            console.log(String(x) + String(y));
        });
    });
}

logDouble(boxes)