interface IListNode<T> {
    val: T;
    next: ListNode<any> | null;
}

interface IDoubleListNode<T> extends IListNode<T> {
    prev: DoubleListNode<any> | ListNode<any> | null;
}

export class ListNode<T> implements IListNode<T> {
    val: T;
    next: ListNode<any> | null;

    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}

export class DoubleListNode<T> extends ListNode<T> {
    val: T;
    next: ListNode<any> | null;
    prev: DoubleListNode<any> | ListNode<any> | null;

    constructor(val, next?, prev=null) {
        super(val, next)
        this.prev = prev
    }
}

export default ListNode