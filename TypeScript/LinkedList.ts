export class _Node<T> {
  public value: T;
  public next: _Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  protected head: _Node<T> | null;
  protected tail: _Node<T> | null;
  protected length: number;

  constructor(value: T) {
    const newNode = new _Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  get len(): number {
    return this.length;
  }
}
