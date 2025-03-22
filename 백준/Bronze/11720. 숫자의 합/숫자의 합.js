const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let m = input[1];
let sum = 0;

for (i of m){
    sum += Number(i);
}

console.log(sum);