const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0]);
const dp = new Array(n + 1).fill(0);


dp[1] = 1;
if (n >= 2) {
  dp[2] = 1;
}


for (let i = 3; i <= n; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}


console.log(dp[n].toString());