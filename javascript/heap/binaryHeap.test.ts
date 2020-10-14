import BinaryHeap, { MaxHeap, MinHeap } from "./binaryHeap"
import { before, describe, it } from "mocha";
import { assert, expect } from "chai";
describe('BinaryHeap', () => {
    var heap;
    const testArray = [2,7,4,1,8,1]
    beforeEach(done => {
        heap = new BinaryHeap([])

        done()
    })
    describe('Default', function() {
        it('create a BinaryHeap', function() {
            assert.instanceOf(heap, BinaryHeap)
        })
        it('return a MaxHeap by default', function() {
            expect(compareDirectionIsMax(heap.compare)).to.be.true
        })
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
    
})

// helpers
function compareDirectionIsMax(func) {
    return (func(0, 1) > 0)
}
function compareDirectionIsMin(func) {
    return (func(0, 1) < 0)
}