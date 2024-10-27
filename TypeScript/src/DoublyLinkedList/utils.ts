import { _Node, DoublyLinkedList  } from "./DoublyLinkedList";

export function add<T extends DoublyLinkedList<T>>(
  this: DoublyLinkedList<T>,
  value: T
): void {
  const newNode = new _Node(value);

  if (!this.head) {
    this.head = this.tail = newNode;
  }

  this.tail!.nextNode = newNode;
  newNode.prevNode = this.tail;
  this.head = newNode;
}
