import { ListNode, DoubleListNode } from "./listNode";
import { beforeEach, describe, it } from "mocha";
import { assert, expect, should } from "chai";

describe('DoubleListNode', () => {
    let node;
    beforeEach(done => {
        node = new DoubleListNode<number>(5, null, null) 

        done()
    })
    it('returns a doubly linked list node', function() {
        expect(node.next).to.be.null
        expect(node.prev).to.be.null
    })
    it('can link to other DoubleListNodes', function() {
        node.next = new DoubleListNode<number>(12)
        assert.instanceOf(node.next, DoubleListNode)
        expect(node.next.val).to.equal(12)
    })
    it('can link to other ListNodes', function() {
        node.next = new ListNode(12)
        assert.instanceOf(node.next, ListNode)
        expect(node.next.val).to.equal(12)
    })
    it('can be chained using prev', function() {
        let n = 2
        let direction = 1
        let head = node
        let current = node
        let prev = null
        let result = 0;
        while (n > 0) {
            current.next = new DoubleListNode<number>(Math.floor(Math.random() * 100), null, current)
            current = current.next
            --n;
        }
        function helper(current_node) {
            if (current_node.next === null) {
                // console.log("flipping direction")
                direction = -1
                helper(current_node.prev)
            }
            if (current_node.prev === null && direction < 0) {
                console.log('This is done')
                result = current_node.val
                return current_node.val
            }
            if (direction > 0) {
                helper(current_node.next)
            } else if (direction < 0) {
                helper(current_node.prev)
            }
        }
        console.log(node.next.next.next)
        expect(helper(current)).to.equal(head.val)
    })
    it('can link to a mixture of types of nodes', function() {

    })
})