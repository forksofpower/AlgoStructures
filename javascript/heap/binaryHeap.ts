/** 
 * @class BinaryHeap
 */
class BinaryHeap {
	data: Array<number>
	compare: Function

	constructor(data: Array<number>, compare : Function = BinaryHeap.MaxCompare) {
		this.data  = data
		this.compare = compare
		this.heapify()
	}

	static MaxCompare(a: number, b: number): number {
		return b - a
	}
	static MinCompare(a: number, b: number): number {
		return a - b
	}

	get size(): number {
		return this.data.length
	}

	swap(a: number,b: number): void {
		[this.data[a], this.data[b]] = [this.data[b], this.data[a]]
	}

	/**
	 * Show the value at the root of the heap
	 * @return {Number}
	 */
	get peek(): number | null {
		if (this.size < 1) return null;
		return this.data[0]
	}

	heapify(): void {
		if (this.size < 2) return;
		for(let i = 1; i < this.size; i++) {
			this.bubbleUp(i)
		}
	}

	// alias of offer
	push(value: number): void {
		this.data.push(value)
		this.bubbleUp(this.size - 1)
	}

	// alias of poll
	pop(): number {
		if (this.size === 0) return null;

		const result = this.data[0]
		const last = this.data.pop()
		if (this.size !== 0 && last) {
			this.data[0] = last
			this.bubbleDown(0)
		}
		return result
	}

	bubbleUp(index: number): void {
		while(index > 0) {
			const parentIndex = (index - 1) >> 1;
			if (this.compare(this.data[index], this.data[parentIndex]) < 0) {
				this.swap(index, parentIndex)
				index = parentIndex
			} else {
				// stop at current position
				break;
			}
		}
	}

	bubbleDown(index: number): void {
		const lastIndex = this.size - 1;
		let currentIndex = index;
		while(true) {
			const leftIndex = index * 2 + 1
			const rightIndex = index * 2 + 2

			// check left
			if (leftIndex <= lastIndex &&
				this.compare(this.data[leftIndex], this.data[currentIndex]) < 0
			) {
				currentIndex = leftIndex
			}
			// check right
			if (rightIndex <= lastIndex &&
				this.compare(this.data[rightIndex], this.data[currentIndex]) < 0
			) {
				currentIndex = rightIndex
			}

			if (index != currentIndex) {
				this.swap(index, currentIndex)
				index = currentIndex
			} else {
				break;
			}
		}
	}

	clear() {
		this.data.length = 0
	}
}

export class MaxHeap extends BinaryHeap {
	constructor(data: Array<number>) {
		super(data, BinaryHeap.MaxCompare)
	}
}

export class MinHeap extends BinaryHeap {
	constructor(data: Array<number>) {
		super(data, BinaryHeap.MinCompare)
	}
}

export default BinaryHeap