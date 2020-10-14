import { ListNode, DoubleListNode } from "./listNode";
import { beforeEach, describe, it } from "mocha";
import { assert, expect, should } from "chai";

describe('ListNode', () => {
    let node;

    beforeEach(done => {
        node = new ListNode(5)

        done()
    })

    it('return a node with correct value', function() {
        expect(node.val).to.equal(5)
    })

    it('can store different types of data', function() {
        // string
        node = new ListNode("testing a string")
        assert.typeOf(node.val, 'string', 'ListNode<string>.val must be type string')
        // number
        node = new ListNode(4.5)
        assert.typeOf(node.val, 'number')
        // object
        node = new ListNode({data: { user: { name: "Tester"}}})
        assert.typeOf(node.val, 'object')
        expect(node.val.data.user.name).to.equal("Tester")
    })
})