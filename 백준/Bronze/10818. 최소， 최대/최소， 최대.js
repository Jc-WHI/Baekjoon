const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);

const arr = input[1].split(" ").map(Number);

let max = Math.max(...arr);
let min = Math.min(...arr);

console.log(min + " "+max);