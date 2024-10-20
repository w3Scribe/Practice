class _Node {
    value;
    next;
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Snap {
    head;
    tail;
    length = 0;
    constructor(value) {
        const newNode = new _Node(value);
        this.head = newNode;
        this.tail = newNode;
    }
    get len() {
        return this.length;
    }
    add(value) {
        const newNode = new _Node(value);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
        this.length++;
    }
    remove(value) {
        let currentNode = this.head;
        let previousNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                previousNode.next = currentNode.next;
                this.length--;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    find(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value)
                break;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    get(index) {
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (index === i)
                break;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    set(index, value) {
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (index === i) {
                currentNode.value = value;
                break;
            }
            currentNode = currentNode.next;
        }
    }
}
export { Snap };
