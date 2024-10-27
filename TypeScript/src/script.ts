class ListNode<T> {
  public value: T;
  public prevNode: ListNode<T> | null = null;
  public nextNode: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class DoublyLinkedList<T> {
  protected head: ListNode<T> | null = null;
  protected tail: ListNode<T> | null = null;
  protected length: number = 0;

  add(value: T) {
    let newNode = new ListNode(value);
    if (!this.head) this.head = this.tail = newNode;
    newNode.prevNode = this.tail;
    this.tail!.nextNode = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  remove(value: T) {
    if (!this.head) return undefined;
    let currentNode = this.head;

    while (currentNode.nextNode) {
      if (currentNode.value === value) break;
      currentNode = currentNode.nextNode;
    }

    this.head = currentNode.prevNode;
    this.head!.nextNode = currentNode.nextNode;
    this.length -= 1;
  }

  get size() {
    if (this.length === 0) return "Empty";
    return this.length;
  }

  get print() {
    let currentNode = this.head;
    if (!currentNode) return undefined;
    if (this.length === 1) return [currentNode.value];
    let result: T[] = [];

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }

    return result;
  }
}

const result = new DoublyLinkedList<number>();
result.add(10);
result.remove(10);

console.log(result);
