class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get (index) {
        return this.data[index];
    }

    push (item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop () {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        // delete lastItem;
        this.length--;
        return lastItem;
    }

    delete (index) {
        const item = this.data[index];
        this.shiftItem(index);
    }

    shiftItem (index) {
        for (i=index; i<this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("eiei");
newArray.push("!");
newArray.pop()

console.log(newArray);