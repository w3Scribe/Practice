"use strict";
class ListNode {
    value;
    prevNode = null;
    nextNode = null;
    constructor(value) {
        this.value = value;
    }
}
class DoublyLinkedList {
    head = null;
    tail = null;
    length = 0;
    add(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.nextNode = newNode;
            newNode.prevNode = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    get size() {
        return this.length;
    }
}
const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
console.log(list.size); // 3
