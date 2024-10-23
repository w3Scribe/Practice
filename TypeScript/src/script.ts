class _Node<T> {
  value: T;
  next: _Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

interface IMethods<T> {
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

type Methods<K> = Partial<IMethods<K>>;

class Snap<T> implements Methods<T> {
  protected head: _Node<T> | null;
  protected tail: _Node<T> | null;
  protected length: number = 0;

  constructor(value: T) {
    const newNode = new _Node(value);
    this.head = newNode;
    this.tail = newNode;
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
    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        previousNode!.next = currentNode.next;
        this.length--;
        break;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  find(value: T): _Node<T> | null {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) break;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  get(index: number): _Node<T> | null {
    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if (index === i) break;
      currentNode = currentNode!.next;
    }

    return currentNode;
  }

  set(index: number, value: T): void {
    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if (index === i) {
        currentNode!.value = value;
        break;
      }
      currentNode = currentNode!.next;
    }
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  contains(value: T): boolean {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  
  
}


