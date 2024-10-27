export class _Node<T> {
  public value: T;
  public prevNode: _Node<T> | null = null;
  public nextNode: _Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoublyLinkedList<K> {
  public head: _Node<K> | null = null;
  public tail: _Node<K> | null = null;
  public static size: number = 0;

  static getSize() {
    return this.size;
  }

  public add(value: K): void {}
}
