const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");



let [n, m, k, x] = input.shift().split(" ").map(Number);

const arr = input.map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);

const distances = Array(n + 1).fill(0);

let answer = [];

arr.forEach(([from, to]) => graph[from].push(to));

const bfs = (start) => {

  const queue = [start];

  distances[start] = 1;


  while (queue.length) {

    const now = queue.shift();

    if (distances[now] == k + 1) {

      answer.push(now);

      continue;
    }
    
    for (const next of graph[now]) {
      if (!distances[next]) {
        queue.push(next);
        distances[next] = distances[now] + 1;
      }
    }
  }
};

bfs(x);

if (answer.length) {
    answer = answer.sort((a, b) => a - b).join('\n');
  } else {
    answer = -1;
  }
  
  console.log(answer);