class _Node<T> {
  public value: T;
  public next: _Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: _Node<T> | null;
  private tail: _Node<T> | null;
  private length: number;

  constructor(value: T) {
    const newNode = new _Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  get len(): number {
    return this.length;
  }

  push(value: T): void {
    const newNode = new _Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
    this.length += 1;
  }
}

const node = new LinkedList<number>(1);
node.push(10);
node.push(20)

console.log(node.len);
