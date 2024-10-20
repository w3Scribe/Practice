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
  remove(value: T): void;
  get(index: number): T;
  set(index: number, value: T): void;
  contains(value: T): boolean;
  clear(): void;
  find(value: T): number;
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
}

const result = new Snap("oneVlaue");
result.add("twoValue");
result.add("threeValue");

console.log(result.len);
