class _Node<T> {
  value: T;
  next: _Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

interface Methods<T> {
  add(value: T): void;
  remove(value: T): _Node<T> | null;
  get(index: number): _Node<T> | null;
  set(index: number, value: T): void;
  contains(value: T): boolean;
  clear(): void;
  find(value: T): _Node<T> | null;
  part(start: number, end: number): _Node<T>[];
  sort(): void;
}

class Snap<T> implements Methods<T> {
  protected head: _Node<T> | null = null;
  protected tail: _Node<T> | null = null;
  protected length: number = 0;

  constructor(value: T) {
    const newNode = new _Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  get len(): number {
    return this.length;
  }

  add(value: T): void {
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

  remove(value: T): _Node<T> | null {
    if (!this.head) return null;

    let currentNode = this.head;
    let previousNode: _Node<T> | null = null;

    while (currentNode) {
      if (currentNode.value === value) {
        if (previousNode) {
          previousNode.next = currentNode.next;
        } else {
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
      } else {
        break;
      }
    }

    return null;
  }

  find(value: T): _Node<T> | null {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  get(index: number): _Node<T> | null {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode!.next;
    }

    return currentNode;
  }

  set(index: number, value: T): void {
    const node = this.get(index);
    if (node) {
      node.value = value;
    }
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  contains(value: T): boolean {
    return this.find(value) !== null;
  }

  part(start: number, end: number): _Node<T>[] {
    if (start < 0 || end >= this.length || start > end) return [];

    let currentNode = this.head;
    let result: _Node<T>[] = [];

    for (let i = 0; i <= end; i++) {
      if (i >= start) {
        result.push(currentNode!);
      }
      currentNode = currentNode!.next;
    }

    return result;
  }

  sort(): void {
    if (!this.head || this.length < 2) return;

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
