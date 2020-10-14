import TreeNode from "./treeNode";
import { beforeEach, describe, it } from "mocha";
import { assert, expect } from "chai";

describe('TreeNode', () => {
    var node;

    beforeEach( done => {
        node = new TreeNode<number>(5)

        done()
    })

    it('return a TreeNode with correct value', function() {
        expect(node.val).to.be.eql(5)
    })
    it('has no child nodes by default', function() {
        expect(node.left).to.be.null
        expect(node.right).to.be.null
    })
    it('can link to other TreeNodes', function() {
        let subTree = new TreeNode(10, new TreeNode(8), new TreeNode(12))
        node.right = subTree;
        expect(node.right.left.val).to.equal(8)
        expect(node.right.val).to.equal(10)
        expect(node.right.right.val).to.equal(12)
    })
    
})
