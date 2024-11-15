export class _Node {
    value;
    prevNode = null;
    nextNode = null;
    constructor(value) {
        this.value = value;
    }
}
export class DoublyLinkedList {
    head = null;
    tail = null;
    static size = 0;
    static getSize() {
        return this.size;
    }
    add(value) { }
}
