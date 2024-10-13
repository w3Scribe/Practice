import { LinkedList, _Node } from "./LinkedList";

class LinkedListFn<T> extends LinkedList<T> {
  // push
  push(value: T): T | null {
    const newNode = new _Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return value;
  }

  // Example method
  pop(): T | null {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.value;
  }
}

export { LinkedListFn };
