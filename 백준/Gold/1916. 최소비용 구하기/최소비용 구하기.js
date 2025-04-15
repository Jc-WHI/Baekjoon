const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[1]);
const buses = [];
for (let i = 2; i < m + 2; i++) {
  const [start, end, cost] = input[i].split(" ").map(Number);
  buses.push({ start, end, cost });
}
const [startCity, endCity] = input[m + 2].split(" ").map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex].cost <= this.heap[currentIndex].cost) break;
      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
      currentIndex = parentIndex;
    }
  }
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;
    while (true) {
      const leftIndex = currentIndex * 2 + 1;
      const rightIndex = currentIndex * 2 + 2;
      let smallestIndex = currentIndex;
      if (leftIndex < this.heap.length && this.heap[leftIndex].cost < this.heap[smallestIndex].cost) {
        smallestIndex = leftIndex;
      }
      if (rightIndex < this.heap.length && this.heap[rightIndex].cost < this.heap[smallestIndex].cost) {
        smallestIndex = rightIndex;
      }
      if (smallestIndex === currentIndex) break;
      [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];
      currentIndex = smallestIndex;
    }
    return minValue;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}


const adjList = Array.from({ length: n + 1 }, () => []);
for (const bus of buses) {
  adjList[bus.start].push({ to: bus.end, cost: bus.cost });
}


const costArr = Array(n + 1).fill(Infinity);
costArr[startCity] = 0;
const pq = new MinHeap();
pq.push({ node: startCity, cost: 0 });

while (!pq.isEmpty()) {
  const { node: currentCity, cost: currentCost } = pq.pop();

 
  if (currentCost > costArr[currentCity]) {
    continue;
  }

  
  for (const neighbor of adjList[currentCity]) {
    const nextCity = neighbor.to;
    const nextCost = currentCost + neighbor.cost;

    
    if (nextCost < costArr[nextCity]) {
      costArr[nextCity] = nextCost;
      pq.push({ node: nextCity, cost: nextCost });
    }
  }
}

console.log(costArr[endCity]);