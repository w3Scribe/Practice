export class ListNode<T> {
  public value: T;
  public prevNode: ListNode<T> | null = null;
  public nextNode: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
