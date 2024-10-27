import { ListNode } from "./ListNode";

export class DoublyLinkedList<T> {
  protected head: ListNode<T> | null = null;
  protected tail: ListNode<T> | null = null;
  protected size: number = 0;

  public getSize(): number {
    return this.size;
  }
}
