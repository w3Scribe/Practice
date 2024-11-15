export declare class _Node<T> {
    value: T;
    prevNode: _Node<T> | null;
    nextNode: _Node<T> | null;
    constructor(value: T);
}
export declare class DoublyLinkedList<K> {
    head: _Node<K> | null;
    tail: _Node<K> | null;
    static size: number;
    static getSize(): number;
    add(value: K): void;
}
