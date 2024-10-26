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
    add(value) {
        let newNode = new ListNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        newNode.prevNode = this.tail;
        this.tail.nextNode = newNode;
        this.tail = newNode;
    }
}
const result = new DoublyLinkedList();
result.add(1232);
result.add(121);
result.add(3232);
console.log(result);
