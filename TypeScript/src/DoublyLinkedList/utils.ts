import { _Node, DoublyLinkedList } from "./DoublyLinkedList";

export default DoublyLinkedList.prototype.add = function <T>(value: T): void {
  const newNode = new _Node(value);

  if (!this.head) {
    this.head = this.tail = newNode;
  }

  this.tail!.nextNode = newNode;
  newNode.prevNode = this.tail;
  this.head = newNode;
};

