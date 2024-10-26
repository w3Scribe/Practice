class ListNode<T> {
  value: T;
  prevNode: ListNode<T> | null = null;
  nextNode: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}  

class DoublyLinkedList<T> {
  protected head: ListNode<T> | null = null;
  protected tail: ListNode<T> | null = null;

  add(value: T): void {
    let newNode = new ListNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    newNode.prevNode = this.tail;
    this.tail!.nextNode = newNode;
    this.tail = newNode;
  }
}

const result = new DoublyLinkedList<number>();

result.add(1232);
result.add(121);
result.add(3232);

console.log(result);
