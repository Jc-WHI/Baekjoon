const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let s = input[0];
const n = s.length;
let answer = n;

let reverse = s.split('').reverse().join('');

for (let i = 0; i < n; i++) {
  let flag = true;
  for (let j = 0; j < n - i; j++) {
    if (s[i + j] !== reverse[j]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    answer += i;
    break;
  }
}
console.log(answer);