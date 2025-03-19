const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const string = input[0];
const index = Number(input[1]);

console.log(string[index-1]);