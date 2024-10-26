declare class ListNode<T> {
    value: T;
    prevNode: ListNode<T> | null;
    nextNode: ListNode<T> | null;
    constructor(value: T);
}
declare class DoublyLinkedList<T> {
    protected head: ListNode<T> | null;
    protected tail: ListNode<T> | null;
    add(value: T): void;
}
declare const result: DoublyLinkedList<number>;
