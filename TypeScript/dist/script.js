"use strict";
class _Node {
    value;
    next = null;
    constructor(value) {
        this.value = value;
    }
}
class Snap {
    head = null;
    tail = null;
    length = 0;
    constructor(value) {
        const newNode = new _Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
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
        if (!this.head)
            return null;
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode) {
            if (currentNode.value === value) {
                if (previousNode) {
                    previousNode.next = currentNode.next;
                }
                else {
                    this.head = currentNode.next;
                }
                if (currentNode === this.tail) {
                    this.tail = previousNode;
                }
                this.length--;
                return currentNode;
            }
            previousNode = currentNode;
            if (currentNode.next) {
                currentNode = currentNode.next;
            }
            else {
                break;
            }
        }
        return null;
    }
    find(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value)
                return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    set(index, value) {
        const node = this.get(index);
        if (node) {
            node.value = value;
        }
    }
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    contains(value) {
        return this.find(value) !== null;
    }
    part(start, end) {
        if (start < 0 || end >= this.length || start > end)
            return [];
        let currentNode = this.head;
        let result = [];
        for (let i = 0; i <= end; i++) {
            if (i >= start) {
                result.push(currentNode);
            }
            currentNode = currentNode.next;
        }
        return result;
    }
    sort() {
        if (!this.head || this.length < 2)
            return;
        let sorted = false;
        while (!sorted) {
            sorted = true;
            let currentNode = this.head;
            while (currentNode && currentNode.next) {
                if (currentNode.value > currentNode.next.value) {
                    [currentNode.value, currentNode.next.value] = [currentNode.next.value, currentNode.value];
                    sorted = false;
                }
                currentNode = currentNode.next;
            }
        }
    }
}
