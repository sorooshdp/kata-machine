type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail : Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {}
    deque(): T | undefined {
        if(!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}