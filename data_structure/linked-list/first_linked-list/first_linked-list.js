class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value);    
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length = this.length + 1;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value) {
        if(index >= this.length){
            return this.append(value);
        }
        if(index === 0) {
            this.prepend(value);
            return this.printList();
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        const nextFromRemove = holdingPointer.next;
        leader.next =nextFromRemove;
        this.length--;
    }

    reverse() {
        if(this.length === 1) {
            return this.head;
        }
        let firstItem = this.head;
        this.tail = this.head;
        let secondItem = firstItem.next;
        while(secondItem !== null) {
            const temp = secondItem.next;
            secondItem.next = firstItem;
            firstItem = secondItem;
            secondItem = temp;
        }
        this.head.next = null;
        this.head = firstItem;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(1);

myLinkedList.insert(2, 99);

console.log(myLinkedList.printList())
myLinkedList.remove(2);

console.log(myLinkedList.printList())