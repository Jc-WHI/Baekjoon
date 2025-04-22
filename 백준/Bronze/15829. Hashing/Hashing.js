const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const L = Number(input[0]);
const str = input[1];
const r = 31;
const M = 1234567891;
let result = 0;
let power = 1;

for (let i = 0; i < L; i++) {
    const charValue = str.charCodeAt(i) - 'a'.charCodeAt(0) + 1;
    result = (result + (charValue * power) % M) % M;
    power = (power * r) % M;
}

console.log(result);
