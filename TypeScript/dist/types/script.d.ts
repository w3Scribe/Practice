declare class _Node<T> {
    value: T;
    next: _Node<T> | null;
    constructor(value: T);
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
declare class Snap<T> implements Methods<T> {
    protected head: _Node<T> | null;
    protected tail: _Node<T> | null;
    protected length: number;
    constructor(value: T);
    get len(): number;
    add(value: T): void;
    remove(value: T): _Node<T> | null;
    find(value: T): _Node<T> | null;
    get(index: number): _Node<T> | null;
    set(index: number, value: T): void;
    clear(): void;
    contains(value: T): boolean;
    part(start: number, end: number): _Node<T>[];
    sort(): void;
}
