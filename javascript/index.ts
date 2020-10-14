import { MaxHeap } from "./heap/binaryHeap";

var lastStoneWeight = function(stones: Array<number>) {
	const heap = new MaxHeap(stones)

	while(heap.size > 1) {
		const maxA: number = heap.pop()
		const maxB: number = heap.pop()

		if (maxA > maxB) heap.push(maxA - maxB)
	}

	return (heap.size === 1) ? heap.pop() : 0
}
console.log('answer: ', lastStoneWeight([2,7,4,1,8,1]))