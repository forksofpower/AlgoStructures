import BinaryHeap, { MaxHeap, MinHeap } from "./binaryHeap"
import { beforeEach, describe, it } from "mocha";
import { assert, expect } from "chai";
describe('BinaryHeap', () => {
    var heap;
    const testArray = [2,7,4,1,8,1]
    beforeEach(done => {
        heap = new BinaryHeap([])

        done()
    })
    it('create a BinaryHeap', function() {
        assert.instanceOf(heap, BinaryHeap)
    })
    it('return a MaxHeap by default', function() {
        expect(compareDirectionIsMax(heap.compare)).to.be.true
    })
    
    describe('MaxHeap Class', () => {
        it('create a MaxHeap', function() {
            assert.instanceOf(heap, BinaryHeap)
            expect(compareDirectionIsMax(heap.compare)).to.be.true
        })
    })
    describe('MinHeap', () => {
        let minHeap = new MinHeap([]);

        it('create a MinHeap', function() {
            assert.instanceOf(heap, BinaryHeap)
            expect(compareDirectionIsMin(minHeap.compare)).to.be.true
        })
    })
    describe('#peek()', () => {
        let peekHeap = new MaxHeap([5])
        it('returns the top element in the heap', function() {
            expect(peekHeap.peek).to.equal(peekHeap.data[0])
        })
        it('returns null when the heap is empty', function() {
            expect(peekHeap.pop()).to.equal(5)
            expect(peekHeap.peek).to.be.null

        })
    })
    describe('#push()', () => {
        let pushHeap = new MaxHeap([])
        it('adds elements the heap', function() {
            pushHeap.push(5)
            expect(pushHeap.peek).to.equal(5)
        })
    })
    
})

// helpers
function compareDirectionIsMax(func) {
    return (func(0, 1) > 0)
}
function compareDirectionIsMin(func) {
    return (func(0, 1) < 0)
}