import TreeNode from "./treeNode";
import { beforeEach, describe, it } from "mocha";
import { assert, expect } from "chai";

describe('TreeNode', () => {
    var node;

    beforeEach( done => {
        node = new TreeNode(5)

        done()
    })

    it('return a TreeNode with correct value', function() {
        expect(node.val).to.be.eql(5)
    })
    it('has no child nodes by default', function() {
        expect(node.left).to.be.null
        expect(node.right).to.be.null
    })
    
})
