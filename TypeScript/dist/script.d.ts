declare class ListNode<T> {
    readonly value: T;
    prevNode: ListNode<T> | null;
    nextNode: ListNode<T> | null;
    constructor(value: T);
}
declare class DoublyLinkedList<T> {
    private head;
    private tail;
    private length;
    add(value: T): void;
    get size(): number;
}
declare const list: DoublyLinkedList<number>;
